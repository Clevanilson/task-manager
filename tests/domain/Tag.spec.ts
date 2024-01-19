import { ErrorInvalidParam, HexColor, Tag } from "@/domain";

test("Should create a Tag", () => {
  const color = new HexColor("#fff");
  const tag = new Tag("Tag 1", color);
  expect(tag).toEqual({ title: "Tag 1", color });
});

test.each(["", "a".repeat(21), null, undefined, 10, false, true])(
  "Should not create a tag with an invalid title",
  (title: any) => {
    const color = new HexColor("#fff");
    expect(() => new Tag(title, color)).toThrow(new ErrorInvalidParam("title"));
  },
);
