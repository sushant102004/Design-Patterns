const SingletonDesignPattern = (function() {
    let processManager
    
    class ProcessManager {
        constructor() {
            this.numberOfProcesses = 0
        }
    }

    function createProcessManager() {
        console.log('Creating Process Manager')
        processManager = new ProcessManager()
        return processManager
    }

    return {    
        getProcessManager: () => {
            if(processManager === undefined) {
               console.log('Inside Get Process Manager')
               processManager = createProcessManager()
               return processManager 
            }
        }
    }
})()

const pManagerOne = SingletonDesignPattern.getProcessManager()
const pManagerTwo = SingletonDesignPattern.getProcessManager()
const pManagerThree = SingletonDesignPattern.getProcessManager()
