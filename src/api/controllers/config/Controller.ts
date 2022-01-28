import { AxiosResponse } from "axios";
import { axiosBase } from "./axiosBase";

export interface IProps {
	requestUrl?: string;
}

export abstract class Controller {
	private _requestUrl: IProps["requestUrl"];

	constructor({ requestUrl }: IProps) {
		this._requestUrl = requestUrl;
	}

	public get<T>(path?: string) {
		const request = () => {
			return axiosBase.get<T>(this.processPath(path));
		};

		return this.fetchRequest(request);
	}

	private processPath(path?: string) {
		return `${this._requestUrl}${path || ""}`;
	}

	private fetchRequest<T>(request: () => Promise<AxiosResponse<T>>) {
		if (!this._requestUrl) {
			throw new Error("Expected request url is absent");
		}

		return request();
	}
}
