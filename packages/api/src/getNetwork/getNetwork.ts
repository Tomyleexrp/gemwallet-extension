import { sendMessageToContentScript } from '../helpers/extensionMessaging';
import { Message, GEM_WALLET, MessageListenerEvent, NetworkResponse, Network } from '../types';

export const getNetwork = async () => {
  let response: NetworkResponse = { network: Network.Test, error: '' };
  try {
    const message: MessageListenerEvent = {
      app: GEM_WALLET,
      type: Message.RequestNetwork
    };
    response = await sendMessageToContentScript(message);
  } catch (e) {
    console.error(e);
  }

  const { network, error } = response;

  if (error) {
    throw error;
  }
  return network;
};
