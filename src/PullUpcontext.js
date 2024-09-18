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
    case "skip-back-index": {
      return { ...status, indexState: status.indexState - action.skip };
    }
    case "skip-to-up": {
      return { ...status, indexState: action.index };
    }
    case "skip-forward-index": {
      return { ...status, indexState: status.indexState + action.skip };
    }
    case "skip-to-down": {
      return { ...status, indexState: action.index };
    }
    case "current-total-time": {
      return {
        ...status,
        currentTime: action.currentTime,
        duration: action.duration,
      };
    }
    case "change-volume": {
      return { ...status, audioVolume: action.volume };
    }

    default: {
      return status;
    }
  }
}

export default PullUpReducer;
