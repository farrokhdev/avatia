import {httpApi} from "./http.api";


export interface PageResponse {
    success: boolean,
    message: string,
    data: any
}


export const generateAvatar = (username: string, gender: string, image_file: File | undefined): Promise<PageResponse> =>
    httpApi.post<PageResponse>(`create/?user_name=${username}&gender=${gender}`, {image_file: image_file}, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => data);

export const generateAvatarHair = (username: string, hairName: string): Promise<PageResponse> =>
    httpApi.patch<PageResponse>(`create/?user_name=${username}&hair=${hairName}`).then(({data}) => data);

export const downloadAvatar = (username: string): Promise<PageResponse> =>
    httpApi.get<PageResponse>(`create/download/?user_name=${username}`).then(({data}) => data);

