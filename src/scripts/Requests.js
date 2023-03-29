import { getRequests, deleteRequest, saveCompletion } from "./dataAccess.js"
import { plumbersDropDown } from "./Plumbers.js"

export const Requests = () => {
    
    const requests = getRequests()
    
    
        
        let html = '<ul>'
        
          const convertRequestToListElement= requests.map((request) => {
            return `<li> ${request.description}
            <div class="plumbers"> ${plumbersDropDown(request)}
            </div>
            <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button> </li>`
          }
          ) 
          html+= convertRequestToListElement.join("")
        html+='</ul>'

        
        
        
        return html
    }

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
  
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: requestId,
                plumberId: plumberId,
                date_created: `${date.now()}` 
                
             }

             saveCompletion(completion)

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)
