const Imagekit = require("@imagekit/nodejs");

const imagekit = new Imagekit({
    private : process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadAvatar(buffer){
    const result =  imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image1",
    })
    return result 
}


module.exports= uploadAvatar;