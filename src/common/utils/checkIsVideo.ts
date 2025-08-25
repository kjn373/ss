export const isVideo = (name: string) => {
    const allowedVideoExten = ["mp4",
    "webm",
    "ogg",
    "avi",
    "mkv",
    "mov",
    "wmv",
    "flv"]
    const extension = name.split('.').pop()?.toLocaleLowerCase();
    const videoExists = allowedVideoExten.includes(extension || '')

    return videoExists


}