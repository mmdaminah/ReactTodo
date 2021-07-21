const initialState = {
    Tasks: [],
    copiedTasks: [],
};
const todoReducer = (state, action) => {
    switch (action.type) {
        case "addTask":
            return {
                ...state,
                Tasks: [...state.Tasks, action.payLoad],
                copiedTasks: [...state.Tasks, action.payLoad],
            };
        case "removeTask":
            return {
                ...state,
                Tasks: state.Tasks.filter((item) => item.id !== action.payLoad),
                copiedTasks: state.Tasks.filter(
                    (item) => item.id !== action.payLoad
                ),
            };
        case "editTask":
            return {
                ...state,
                Tasks: [
                    ...state.Tasks.filter(
                        (item) => item.id !== action.payLoad.id
                    ),
                    action.payLoad,
                ],
                copiedTasks: [
                    ...state.Tasks.filter(
                        (item) => item.id !== action.payLoad.id
                    ),
                    action.payLoad,
                ],
            };
        case "sortById":
            return {
                ...state,
                Tasks: state.Tasks.sort((a, b) => a.id - b.id),
            };
        case "sortIncreasing":
            return {
                ...state,
                Tasks: state.Tasks.sort(
                    (a, b) =>
                        priorityAndStatusToNum(b[action.payLoad]) -
                        priorityAndStatusToNum(a[action.payLoad])
                ),
            };

        case "sortDecreasing":
            return {
                ...state,
                Tasks: state.Tasks.sort(
                    (a, b) =>
                        priorityAndStatusToNum(a[action.payLoad]) -
                        priorityAndStatusToNum(b[action.payLoad])
                ),
            };
        case "sortByDateIncreasing":
            return {
                ...state,
                Tasks: state.Tasks.sort(
                    (a, b) => b.TaskDeadline - a.TaskDeadline
                ),
            };
        case "sortByDateDecreasing":
            return {
                ...state,
                Tasks: state.Tasks.sort(
                    (a, b) => a.TaskDeadline - b.TaskDeadline
                ),
            };
        case "searchTask":
            return {
                ...state,
                Tasks: action.copiedTasks.filter((item) =>
                    item.TaskName.startsWith(action.payLoad)
                ),
            };
        case "returnCopyState":
            return {
                ...state,
                Tasks: state.copiedTasks,
            };
        case "sidebarFilterPriority":
            return {
              ...state,
              Tasks:action.copiedTasks.filter(
                (item) => item.TaskPriority === action.payLoad
            )
            }
            
        case "sidebarFilterStatus":
            return {
              ...state,
              Tasks:action.copiedTasks.filter(
                  (item) => item.TaskStatus === action.payLoad
              )

            }
        case "sidebarFilterDeadline":
            return {
              ...state,
              Tasks:action.payLoad
            }
        case "sidebarFilterPriorityStatus":
            return {
              ...state,
              Tasks:action.copiedTasks.filter(
                (item) =>
                    item.TaskPriority === action.payLoad[0] &&
                    item.TaskStatus === action.payLoad[1]
            )
            }
        default:
            return initialState;
    }
};
const priorityAndStatusToNum = (statusOrPriority) => {
    if (statusOrPriority === "High" || statusOrPriority === "To do") return 3;
    else if (statusOrPriority === "Medium" || statusOrPriority === "Doing")
        return 2;
    else return 1;
};
export default todoReducer;
