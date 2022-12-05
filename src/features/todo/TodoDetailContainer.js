import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, redirect } from "react-router-dom";

import { selectLists, updateTodo } from "./todoSlice";

function TodoDetailContainer(props) {
  const todoLists = useSelector(selectLists);
 
  const [seletedItem, setSeletedItem] = useState({});
  const [action, setAction] = useState("");
  const [chooseFlow, setChooseFlow] = useState("");
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    if (props.showDefault) {
      setSeletedItem(todoLists[0]);
      setAction(todoLists[0].action);
    }
    if (id) {
      const currentSelectedItem = todoLists.filter((item) => item.id == id);
      if (currentSelectedItem.length) {
        setSeletedItem(currentSelectedItem[0]);
        setAction(currentSelectedItem[0].action);
      }
    }
  }, [todoLists, id]);

  const onChangeAction = (event) => {
    setAction(event.target.value);

    dispatch(
      updateTodo({
        ...seletedItem,
        action: event.target.value,
        choosen_flow:
          event.target.value !== "Invoke Flow" ? "" : seletedItem.choosen_flow,
      })
    );
  };

  const handleChooseChange = (event) => {
    setChooseFlow(event.target.value);
    dispatch(
      updateTodo({
        ...seletedItem,
        choosen_flow: event.target.value,
      })
    );
  };

// handle textarea
  const handleTextArea = (event) => {

    dispatch(
      updateTodo({
        ...seletedItem,
        message: event.target.value,
      })
    );
  };

  const handleKeyboardChange = (event) => {
    dispatch(
      updateTodo({
        ...seletedItem,
        keyword: event.target.value,
      })
    );
  };
 

  const handleLabelChange = (event) => {
    dispatch(
      updateTodo({
        ...seletedItem,
        label: event.target.value,
      })
    );
  };

  return (
    <div className="employee-list">
      <h4> Keyword Properties</h4>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label className="form-label">Keyword</label>
            <input
              type="text"
              className="form-control"
              value={seletedItem.keyword || ''}
              onChange={(event) => handleKeyboardChange(event)}
            />
          </div>
        </div>

        <div className="col-6">
          <label className="form-label">Label</label>

          <input
            type="text"
            className="form-control "
            value={seletedItem.label || ''}
            onChange={(event) => handleLabelChange(event)}
          />
        </div>
      </div>

      <div>
        <label className="form-label"> Action</label>

        <div onChange={onChangeAction} className="d-flex ">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              value="Invoke Flow"
              name="action"
              defaultChecked={action === "Invoke Flow"}
            />
            <label className="form-check-label"> Invoke Flow</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              value="Keyword"
              name="action"
              defaultChecked={action === "Keyword"}
            />{" "}
            <label className="form-check-label"> Keyword</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              value="Back"
              name="action"
              defaultChecked={action === "Back"}
            />
            <label className="form-check-label"> Back</label>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <label className="form-check-label"> Choose flow</label>
        <div className="">
          {action === "Invoke Flow" ? (
            <select
              defaultValue={chooseFlow}
              onChange={handleChooseChange}
              className="form-select"
            >
              <option value="delay">delay</option>
              <option value="ssa">ssa</option>
            </select>
          ) : (
            <textarea
              onChange={(event) => handleTextArea(event)}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
}
export default TodoDetailContainer;
