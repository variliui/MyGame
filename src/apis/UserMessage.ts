
import request from "@/utils/request";
export function test(id: number) {
    return request({
        url: "/TestApi" + "?id=" + id,
        method: "get",
    });
}

export const InitTasks = (
    packPath: string,
    taskID: string,
    importFile: string
) => {
return request({
    url: "/InitTasks",
    method: "post",
    data: {
    packPath,
    taskID,
    editUser: "string",
    editTime: "string",
    importFile,
    },
});
};