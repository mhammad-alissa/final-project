import React , {useState} from 'react';

export default function Todo() {
  const [todo,settodo] = useState('');
  const [edit,setedit] = useState('');
  const [list1,setlist] = useState('');

  function Todo (event) {
    settodo(event.target.value);
  };

 function todoSubmit  () {
    if (localStorage.getItem("todo")) {
      let temp = JSON.parse(localStorage.getItem("todo"));
      temp.push(todo);
      localStorage.setItem("todo", JSON.stringify(temp));
    } else {
      let temp = [todo];
      localStorage.setItem("todo", JSON.stringify(temp));
    }
  };

   function todoClear() {
    settodo("");
    localStorage.setItem("todo", todo);
  };



 function todoDelete (event) {
    var x = event.target.id;
    var list = JSON.parse(localStorage.getItem("todo"));
    list.splice(x, 1);
    localStorage.setItem("todo", JSON.stringify(list));
    // window.location.href = "http://localhost:3000/ToDo";
    localStorage.removeItem(`click-${x}`);
    // this.setState({
    //   list: JSON.parse(localStorage.getItem("todo")),
    // });
    setlist(JSON.parse(localStorage.getItem("todo")));
  };

  
 function editList (event){
    var id = event.target.id;
    // this.setState({
    //   edit: event.target.value,
    // });
    setedit(event.target.value);
    document.getElementById(id).value = "a";
  };

 function todoEdit (event){
    var id = event.target.name;
    var ele = event.target.value;
    var x = `ele-${id}`;
    var y = `list-${id}`;
   
    setedit(ele);
    document.getElementById(x).style.display = "";
    document.getElementById(y).innerText = "";
  };

 function editCancel  (){
    // window.location.href = "http://localhost:3000/ToDo";
  };
 function editSubmit  (event) {
    var id = event.target.name;
    var value = edit;
    var list = JSON.parse(localStorage.getItem("todo"));
    list[id] = value;
    localStorage.setItem("todo", JSON.stringify(list));
  };



 if (localStorage.getItem("todo")) {
    var list = JSON.parse(localStorage.getItem("todo"));
  }
  
 
 function doubleClick  (event) {
    var id = event.target.id;
    if (
      localStorage.getItem(id) === "pind" ||
      localStorage.getItem(id) === null
    ) {
      localStorage.setItem(id, "done");
    } else {
      localStorage.setItem(id, "pind");
    }
    // window.location.href = "http://localhost:3000/ToDo";
  };
  return (
    <section> 
    


<form className="form-box2" onSubmit={todoSubmit}>
            <input
              value={todo}
              className="input"
              type="text"
              placeholder="Type Your ToDo"
              onChange={Todo}
            /> 
            <br></br>
            <input className="submit2" type="submit" value="Add" />
            <br></br>
            <input
              className="clear2"
              type="button"
              value="Clear"
              onClick={todoClear}
            />
          </form>



          <table className="table table-width">
             <thead>
               <tr>
                 <th scope="col">#</th>
                 <th className="todo-col" scope="col">
                  Todo
                 </th>
                 <th scope="col">Edit</th>
                 <th scope="col">Delete</th>
               </tr>
             </thead>
             <tbody>
               {localStorage.getItem("todo")
                ? list.map((ele, i) => {
                    return (
                      <tr>
                        <th id={`tr-${i}`} scope="row">
                          {i}
                        </th>
                        <td id={`click-${i}`} onDoubleClick={doubleClick}>
                          <span style={{ color: "black" }} id={`list-${i}`}>
                            {ele}
                          </span>
                         

                           <form
                            style={{ display: "none" }}
                            id={`ele-${i}`}
                            action=""
                            onSubmit={editSubmit}
                            name={i}
                           >
                            <input
                              style={{
                                padding: "3px",
                                borderRadius: "5px",
                              }}
                              id={`edit-${i}`}
                              type="text"
                              name={ele}
                              value={edit}
                              onChange={editList}
                            />
                            <input
                              style={{
                                margin: "5px",
                                border: "none",
                                backgroundColor: "green",
                                borderRadius: "5px",
                                padding: "5px",
                                color: "white",
                              }}
                              type="submit"
                              value="Save"
                            />
                            <input
                              style={{
                                margin: "5px",
                                border: "none",
                                backgroundColor: "red",
                                borderRadius: "5px",
                                padding: "5px",
                                color: "white",
                              }}
                              type="button"
                              value="Cancel"
                              onClick={editCancel}
                            />
                          </form>
                        </td>
                        <td>
                          <button
                            name={i}
                            value={ele}
                            type="submit"
                            className="edit"
                            onClick={todoEdit}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            id={i}
                            type="submit"
                            className="clear3"
                            onClick={todoDelete}
                          >
                            Delete
                          </button>
                        </td>
                          </tr>
                     );
                   })
                 : ""}
             </tbody>
       </table>
    </section>
  );
}





