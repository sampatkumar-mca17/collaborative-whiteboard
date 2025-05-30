export interface MiroBoard{
    data:MiroBoardData[],
    limit:number,
    links:Partial<MiroBoardLinks>,
    offset:number,
    size:number,
    total:number,
    type:string
}

export interface MiroBoardData{
    createdAt: string,
    createdBy:MiroBoardCreatedBy,
    currentMembership:MiroBoardCurrentMembershipt,
    description:string,
    id:string,
    lastOpenedAt:string,
    lastOpenedBy:MiroBoardCreatedBy,
    links:MiroBoardLinks,
    modifiedAt:string,
    modifiedBy:MiroBoardCreatedBy,
    name:string,
    owner:MiroBoardCreatedBy,
    permissionPolicy:MiroBoardPermissionPolicy,
    picture:MiroBoardPicture,
    policy:{
        permissionsPolicy:MiroBoardPermissionPolicy,
        sharingPolicy:MiroBoardSharingPolicy
    },
    sharingPolicy:MiroBoardSharingPolicy,
    team:MiroBoardCreatedBy,
    type:string,
    viewLink:string,
    

}
export interface MiroBoardCreatedBy{
    id:string,
    name:string, 
    type:string
}

export interface MiroBoardCurrentMembershipt extends MiroBoardCreatedBy{
    role:string,
}

export interface MiroBoardLinks{
    related:string, 
    self:string
}

export interface MiroBoardPermissionPolicy{
    collaborationToolsStartAccess:string,
    copyAccess:string,
    copyAccessLevel:string,
    sharingAccess:string
}

export interface MiroBoardSharingPolicy{
    access:string,
    inviteToAccountAndBoardLinkAccess:string,
    organizationAccess:string,
    teamAccess:string
}

export interface MiroBoardPicture{
    id:string, 
    imageURL:string,
    type:string
}

export interface StatusChecker<T>{
    fetching:boolean,
    success:boolean,
    data:T,
    fetchingComplete:boolean
}

export interface MiroBoardPickerConfig{
    clientId:string,
    action:string,
    allowCreateAnonymousBoards?:boolean,
    iframeContainer?:HTMLElement,
    success?:(response)=>void,
    error?:(error)=>void,
    cancel?:()=>void
}