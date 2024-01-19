import { HexColor } from "@/domain";

test.each(["#FFF", "#ffffff", "#000", "#0f0f0f"])(
  "Should create a HexColor with value: %p",
  (value: string) => {
    const hexColor = new HexColor(value);
    expect(hexColor.value).toBe(value);
  },
);

test.each(["#ffg", "#fffffg", "#@fffff", "#ffff", 1, undefined, null])(
  "Should throw an error when creating a HexColor with an invalid value: %p",
  (value: any) => {
    expect(() => new HexColor(value)).toThrow(
      `Invalid HexColor value: ${value}`,
    );
  },
);
