import {add} from "../src";

describe("测试测试文件能不能运行", () => {
    it("add函数", () => {
        expect(add(1, 3)).toEqual(4);
    });
});
