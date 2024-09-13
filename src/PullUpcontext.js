function PullUpReducer(status, action) {
  switch (action.type) {
    case "pull-up": {
      return { ...status, pullState: action.pullUp };
    }
    case "pull-down": {
      return { ...status, pullState: action.pullUp };
    }
    case "open-text": {
      return { ...status, textState: action.openText };
    }
    case "close-text": {
      return { ...status, textState: action.openText };
    }

    default: {
      return true;
    }
  }
}

export default PullUpReducer;
