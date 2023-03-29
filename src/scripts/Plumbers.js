import { getPlumbers } from "./dataAccess.js";

export const plumbersDropDown = (request) => {
    const plumbers = getPlumbers()
    return `<select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>`
}