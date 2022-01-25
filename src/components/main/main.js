import React,{Component} from "react";
import Header from "./header";
import TheDesk from "./the desk";
import Desing from "./desing";

export default class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TheDesk/>
                <Desing/>
            </div>
        )
    }
} 