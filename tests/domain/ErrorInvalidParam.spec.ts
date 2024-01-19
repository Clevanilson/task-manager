import { ErrorInvalidParam } from "@/domain";

test("Should create an erro with the correct message", () => {
  expect(new ErrorInvalidParam("title").message).toBe("Invalid param: title");
});
