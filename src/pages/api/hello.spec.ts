// hello.test.ts

import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../pages/api/hello";

describe("/api/hello", () => {
  let req: NextApiRequest;
  let res: NextApiResponse;

  beforeEach(() => {
    req = {} as NextApiRequest;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;
  });

  it("should return a name", () => {
    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ name: "John Doe" });
  });
});
