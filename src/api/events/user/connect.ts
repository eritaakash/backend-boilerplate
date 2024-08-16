export default (io: any, socket: any) => (data: any) => {
    console.log(`[!]: User Connected: ${data.username}`);
};