import React,{Component} from "react";
import Header from "./header";
import TheDesk from "./the desk";
import Desing from "./desing";
import Featured from "./featured";
import HomeOffice from "./homeoffice";
import Made from "./made";
import Make from "./make";

export default class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TheDesk/>
                <Desing/>
                <Featured/>
                <HomeOffice/>
                <Made/>
                <Make/>
            </div>
        )
    }
} 