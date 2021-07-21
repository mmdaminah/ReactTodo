const initialState = {
    Tasks: [
        {
            TaskName: "",
            TaskPriority: "",
            TaskStatus: "",
            TaskDeadline: "",
            TaskDetails: "",
        },
    ],
};
const todoReducer = (state, action) => {
    switch (action.type) {
        case "addTask":
            return [...state, action.payLoad];
        case "removeTask":
            return state.filter((item) => item.id !== action.payLoad);
        case "editTask":
            return [
                ...state.filter((item) => item.id !== action.payLoad.id),
                action.payLoad,
            ];
        case "sortById":
            return state.sort((a, b) => a.id - b.id);
        case "sortIncreasing":
            return state.sort(
                (a, b) =>
                    priorityAndStatusToNum(b[action.payLoad]) -
                    priorityAndStatusToNum(a[action.payLoad])
            );
        case "sortDecreasing":
            return state.sort(
                (a, b) =>
                    priorityAndStatusToNum(a[action.payLoad]) -
                    priorityAndStatusToNum(b[action.payLoad])
            );
        case "sortByDateIncreasing":
            return state.sort((a, b) => b.TaskDeadline - a.TaskDeadline);
        case "sortByDateDecreasing":
            return state.sort((a, b) => a.TaskDeadline - b.TaskDeadline);
        case "searchTask":
            return action.copiedTasks.filter((item) =>
                item.TaskName.startsWith(action.payLoad)
            );
        case "returnCopyState":
            return [...action.copiedTasks];
        case "sidebarFilterPriority":
            return action.copiedTasks.filter(
                (item) => item.TaskPriority === action.payLoad
            );
        case "sidebarFilterStatus":
            return action.copiedTasks.filter(
                (item) => item.TaskStatus === action.payLoad
            );
        case "sidebarFilterDeadline":
            return action.payLoad;
        case "sidebarFilterPriorityStatus":
            return action.copiedTasks.filter(
                (item) =>
                    item.TaskPriority === action.payLoad[0] &&
                    item.TaskStatus === action.payLoad[1]
            );
        case "sidebarFilterStatusDeadline":
        case "sidebarFilterAll":
        default:
          state;
    }
};
const priorityAndStatusToNum = (statusOrPriority) => {
    if (statusOrPriority === "High" || statusOrPriority === "To do") return 3;
    else if (statusOrPriority === "Medium" || statusOrPriority === "Doing")
        return 2;
    else return 1;
};
export default todoReducer;