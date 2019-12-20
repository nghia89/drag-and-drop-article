import React, {Component } from "react";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import './test.css';
export default class Test extends Component{
    state = {
        items: ["Nguyễn văn A", "Nguyễn văn B", "Nguyễn văn Apple", "Nguyễn Anh Samsung",
        "Nguyễn văn A", "Nguyễn văn B1", "Nguyễn văn Apple1", "Nguyễn Anh Samsung1",
        "Nguyễn văn A2", "Nguyễn văn B2", "Nguyễn văn Apple2", "Nguyễn Anh Samsung2",
        "Nguyễn văn A3", "Nguyễn văn B3", "Nguyễn văn Apple3", "Nguyễn Anh Samsung3",
        "Nguyễn văn A4", "Nguyễn văn B4", "Nguyễn văn Apple4", "Nguyễn Anh Samsung4"]
      };
      onDragStart = (e, index) => {
        this.draggedItem = this.state.items[index];//lấy item đang kéo
        e.dataTransfer.effectAllowed = "move";//hiệu ứng di chuyển
        e.dataTransfer.setData("text/html", e.target.parentNode);//để firefox có thể chạy đc
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);//để chrome có thể chạy đc
      };
    
      onDragOver = index => {//set lại vị trí element
        const draggedOverItem = this.state.items[index];
    
        if (this.draggedItem === draggedOverItem) {
          return;
        }
    
        let items = this.state.items.filter(item => item !== this.draggedItem);
    
        items.splice(index, 0, this.draggedItem);
    
        this.setState({ items });
      };
    
      onDragEnd = () => {//kết thúc kéo
        this.draggedIdx = null;
      };
    render(){
        return <div>
           <main>
          <h3>List of items</h3>
          <ul>
            {this.state.items.map((item, idx) => (
              <li key={item+idx} onDragOver={() => this.onDragOver(idx)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={e => this.onDragStart(e, idx)}
                  onDragEnd={this.onDragEnd}
                >
                <span style={{cursor:"move",cursor:"-webkit-grab", cursor:"-moz-grab", cursor:"grab"}}>
                  <Hamburger/>
                </span>
                </div>
                <span className="content">{item}</span>
              </li>
            ))}
          </ul>
        </main>
        </div>
    }
}