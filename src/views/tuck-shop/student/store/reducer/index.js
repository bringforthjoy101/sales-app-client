// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedStudent: null,
  studentDetails: null,
  track: null,
  selectedStudentAllTransactions: [],
  selectedStudentTransactions: [],
  selectedStudentTotalTransactions: 1,
  selectedStudentTransactionParams: {},
  selectedStudentAllOrders: [],
  selectedStudentOrders: [],
  selectedStudentTotalOrders: 1,
  selectedStudentOrderParams: {}
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      console.log(action.data)
      return { ...state, allData: action.data }
    case 'GET_FILTERED_STUDENT_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_STUDENT':
      return { ...state, selectedStudent: action.selectedStudent }
    case 'GET_STUDENT_DETAILS':
      return { ...state, studentDetails: action.studentDetails }
    case 'GET_STUDENT_ALL_TRANSACTIONS':
      return { 
        ...state, 
        selectedStudentAllTransactions: action.data
      }
    case 'GET_STUDENT_TRANSACTIONS':
      return {
        ...state,
        selectedStudentTransactions: action.data,
        selectedStudentTotalTransactions: action.totalPages,
        selectedStudentTransactionParams: action.params
      }
    case 'GET_STUDENT_ALL_ORDERS':
      return { 
        ...state, 
        selectedStudentAllOrders: action.data
      }
    case 'GET_STUDENT_ORDERS':
      return {
        ...state,
        selectedStudentOrders: action.data,
        selectedStudentTotalOrders: action.totalPages,
        selectedStudentOrderParams: action.params
      }
    default:
      return { ...state }
  }
}
export default users
