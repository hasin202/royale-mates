import cleanPlayerDeck from "./clean-player-deck";
import { cards } from "./mock-data";

describe("cleanPlayerDeck", () => {
  // Test #1: Function should return an array of strings
  it("should return an array of strings", () => {
    const mockCards = cards;
    const urls = cleanPlayerDeck(mockCards);
    expect(Array.isArray(urls)).toBe(true);
    expect(typeof urls[0]).toBe("string");
  });

  // Test #2: Should correctly extract medium icon URLs from the cards
  it("should extract medium icon URLs", () => {
    const mockCards = cards;
    const urls = cleanPlayerDeck(mockCards);
    expect(urls).toEqual([
      "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
      "https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png",
    ]);
  });

  // Test #3: Should handle an empty array input
  it("should handle an empty array", () => {
    const urls = cleanPlayerDeck([]);
    expect(urls).toEqual([]);
  });
});
