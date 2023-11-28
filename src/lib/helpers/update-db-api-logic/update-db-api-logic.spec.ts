import apiLogic from "./update-db-api-logic";
import { fetchAndCleanBattles } from "./fetch-and-clean-battles";
import { getRecentDbRows } from "./get-recent-db-rows";
import * as testData from "./test-mock-values";
import { insertDbRows } from "./insert-db-rows";

jest.mock("./fetch-and-clean-battles", () => ({
  fetchAndCleanBattles: jest.fn(),
}));
jest.mock("./get-recent-db-rows", () => ({
  getRecentDbRows: jest.fn(),
}));
jest.mock("./insert-db-rows", () => ({
  insertDbRows: jest.fn(),
}));

const mockedFetchAndCleanBattles = jest.mocked(fetchAndCleanBattles);
const mockedGetRecentDbRows = jest.mocked(getRecentDbRows);

describe("api logic for updating db", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should returns an empty object when no battles are found in both API and database", async () => {
    mockedFetchAndCleanBattles.mockResolvedValue(testData.testOneApiMockReturn);
    mockedGetRecentDbRows.mockResolvedValue(testData.testOneDbMockReturn);

    const result = await apiLogic("string");
    expect(result).toEqual({ rowsAdded: "NA" });
  });

  it("should returns database battles only when API battles are absent but database battles exist)", async () => {
    mockedFetchAndCleanBattles.mockResolvedValue(testData.testTwoApiMockReturn);
    mockedGetRecentDbRows.mockResolvedValue(testData.testTwoDbMockReturn);

    const result = await apiLogic("playerTag");

    expect(result).toEqual({ battles: testData.testTwoDbMockReturn });
  });

  it("should insert API battles into the database and returns them when no database battles are found", async () => {
    mockedFetchAndCleanBattles.mockResolvedValue(
      testData.testThreeApiMockReturn
    );
    mockedGetRecentDbRows.mockResolvedValue(testData.testThreeDbMockReturn);

    const result = await apiLogic("playerTag");

    expect(insertDbRows).toHaveBeenCalledWith(testData.testThreeApiMockReturn);

    expect(result).toEqual({
      rowsAdded: 2,
      battles: testData.testThreeApiMockReturn,
    });
  });

  it("should slice the api battles found if there is an overlap with the battles in the database to ensure battles arent repeated", async () => {
    mockedFetchAndCleanBattles.mockResolvedValue(
      testData.testFourApiMockReturn
    );
    mockedGetRecentDbRows.mockResolvedValue(testData.testFourDbMockReturn);

    const result = await apiLogic("playerTag");

    expect(insertDbRows).toHaveBeenCalled();
    expect(result).toEqual({
      rowsAdded: 1,
    });
  });

  it("should return all db battles if most recent index is at 0 (api battles and db battles have the same most recent battle)", async () => {
    mockedFetchAndCleanBattles.mockResolvedValue(
      testData.testFiveApiMockReturn
    );
    mockedGetRecentDbRows.mockResolvedValue(testData.testFiveDbMockReturn);

    const result = await apiLogic("playerTag");

    expect(result).toEqual({ battles: testData.testFiveDbMockReturn });
  });

  it("should insert all api battles if there is no overlap with existing db battles", async () => {
    console.log("TEST 6----");
    mockedFetchAndCleanBattles.mockResolvedValue(testData.testSixApiMockReturn);
    mockedGetRecentDbRows.mockResolvedValue(testData.testSixDbMockReturn);

    const result = await apiLogic("playerTag");

    expect(insertDbRows).toHaveBeenCalledWith(testData.testSixApiMockReturn);
    expect(result).toEqual({ rowsAdded: 2 });
  });
});
