import axios from "axios";
import ApiConstants from "./apiConstants";
import { EventData } from "../types";

class RequestClients {
async getEvents(): Promise<EventData[]> {
    try {
       return ( await axios.get(ApiConstants.GET_ALL_EVENTS_URL)).data.details;
    } catch (error) {
        throw new Error("Error: Could not get events");
    }
}

    async getEventById(id: string) {
        try {
            const response = await axios.get(`${ApiConstants.GET_EVENT_ID_URL}${id}`);
            return response.data;
        } catch (error) {
            return error
        }
    }

    async createEvent(data: any) {
        try {
            const response = await axios.post(ApiConstants.CREATE_EVENT_URL, data);
            return response.data;
        } catch (error) {
            return error
        }
    }

    async updateEvent(id: string, data: any) {
        try {
            const response = await axios.patch(`${ApiConstants.UPDATE_EVENT_URL}${id}`, data);
            return response.data;
        } catch (error) {
            return error
        }
    }

    async deleteEvent(id: string) {
        try {
            const response = await axios.delete(`${ApiConstants.DELETE_EVENT_URL}${id}`);
            return response.data;
        } catch (error) {
            return error
        }
    }
}

const client = new RequestClients()
export default client