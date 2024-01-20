/* eslint-disable */
export default async () => {
    const t = {
        ["./module/dto/user.dto"]: await import("./module/dto/user.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./module/dto/user.dto"), { "UserDto": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, age: { required: true, type: () => Number } } }], [import("./module/pd-tools/pd-tools-swagger/dto/create-pd-tools-swagger.dto"), { "CreatePdToolsSwaggerDto": {} }], [import("./module/pd-tools/pd-tools-swagger/dto/update-pd-tools-swagger.dto"), { "UpdatePdToolsSwaggerDto": {} }], [import("./module/pd-tools/pd-tools-swagger/entities/pd-tools-swagger.entity"), { "PdToolsSwagger": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getUser": { type: [t["./module/dto/user.dto"].UserDto] } } }], [import("./module/pd-tools/pd-tools-swagger/pd-tools-swagger.controller"), { "PdToolsSwaggerController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }]] } };
};