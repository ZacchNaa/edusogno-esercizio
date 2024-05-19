import ApiConstants from "./apiConstants";
import { EventData } from "../types";
import newAxios from "./axiosInstance";

class RequestClients {
async getEvents(): Promise<EventData[]> {
    try {
       return ( await newAxios({url: ApiConstants.GET_ALL_EVENTS_URL})).data.details;
    } catch (error) {
        throw new Error("Error: Could not get events");
    }
}

    async getEventById(id: string) {
        try {
            const response = await newAxios({url: `${ApiConstants.GET_EVENT_ID_URL}${id}`});
            return response.data;
        } catch (error) {
            return error
        }
    }

    async createEvent(data: any) {
        try {
            const response = await newAxios({url: ApiConstants.CREATE_EVENT_URL, method: "POST", data});
            return response.data;
        } catch (error) {
            return error
        }
    }

    async updateEvent({_id, ...data}: any) {
        try {
            const response = await newAxios({ url: `${ApiConstants.UPDATE_EVENT_URL}${_id}`, method: "PATCH", data});
            return response.data;
        } catch (error) {
            return error
        }
    }

    async deleteEvent(id: string) {
        try {
            const response = await newAxios({url: `${ApiConstants.DELETE_EVENT_URL}${id}`, method: "DELETE"});
            return response.data;
        } catch (error) {
            return error
        }
    }
}

const client = new RequestClients()
export default client