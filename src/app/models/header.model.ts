export class Header {

    constructor(
        title = "Trials", menuIcon = false, gearIcon = true,
        profileIcon = true, logoutIcon = true, homeIcon = false
    ) {
        this.title = title;
        this.menuIcon = menuIcon;
        this.gearIcon = gearIcon;
        this.profileIcon = profileIcon;
        this.logoutIcon = logoutIcon;
        this.homeIcon = homeIcon;
    }

    title: string = "Trials";
    menuIcon: boolean = false;
    gearIcon: boolean = true;
    profileIcon: boolean = true;
    logoutIcon: boolean = true;
    homeIcon: boolean = false;
}