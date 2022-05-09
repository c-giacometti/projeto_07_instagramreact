import Header from "./Header";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Instagram(){

    return (
        <div class="Instagram">
            <Header />
            <Body />
            <MobileBackground />
        </div>
    );

}

function Body(){

    return (
        <div class="corpo">
            <Left />
            <Sidebar />
        </div>
    );

}

function Left(){

    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );

}

function MobileBackground(){

    return (
        <div class="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
    
}