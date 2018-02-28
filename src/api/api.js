import config from './config';

const APIs = {
    servicepack: '/load/scrvice/info/'
};

let addApi = api => {
    Object.keys(api).forEach(key => {
        APIs[key] = `${config.host}${APIs[key]}`;
    });
};
addApi(APIs);
export default APIs;
