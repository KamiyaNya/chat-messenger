import { io } from 'socket.io-client';
import { config } from '@/config';

class SocketApi {
	constructor() {
		this.socket = null;
	}

	socketConnect() {
		if (this.socket) return;
		this.socket = io(config.server);
	}

	socketDisconnect() {
		this.socket.disconnect();
		this.socket = null;
	}
}

export const socket = new SocketApi();
