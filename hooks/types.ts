export interface Item {
    title: string;
    seller: string;
    listingID: string;
    transactionID: string | null;
    condition: string;
    description: string;
    category: string;
    size: string;
    quantityLeft: string;
    price: string;
    delivery: string;
    returns: string;
    datePosted: string;
    dateSold: string;
    imageURLList: string[];
    views: number;
}

export interface UserData {
    email: string;
    firstName: string;
    lastName: string;
    userID: string;
    profilePicture: string;
    school: string;
    following: UserData[];
    followers: UserData[];
    listingsPosted: Item[];
    listingsSold: Item[];
    type: "user" | "administrator";
}