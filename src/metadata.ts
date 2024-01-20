/* eslint-disable */
export default async () => {
    const t = {
        ["./module/dto/user.dto"]: await import("./module/dto/user.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./module/dto/user.dto"), { "UserDto": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, age: { required: true, type: () => Number } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getUser": { type: [t["./module/dto/user.dto"].UserDto] } } }]] } };
};
