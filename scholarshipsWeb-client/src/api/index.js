/*
*往后台传递相关的参数的js文件
*/

import {get,post} from "./http";


/******辅导员相关 转到后台的地址页面******/
// 查询辅导员
export const getAllTeacher = () => get(`teacher/selectAllTeacher`);

/******教务处相关 转到后台的地址页面******/
// 查询教务处
export const getAllOffice = () => get(`office/selectAllOffice`);

/******公告管理相关 转到后台的地址页面******/
// 查询公告管理
export const getAllBulletin = () => get(`bulletin/selectAllBulletin`);
// 查询公告管理
export const getBulletinByKey = (id) => get(`bulletin/selectBulletinByKey?id=${id}`);
// 查询奖学金公告管理
// export const getBulletinForJiang = (params) => get(`bulletin/selectBulletinForJiang`,params);
