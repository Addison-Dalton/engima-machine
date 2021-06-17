type MachineStore = {
  slots: Slot[],
  outputKey: string;
  totalInput: string;
  totalOutput: string;
}

type NonEncodableKeysPayloadAction = {
  inputKey: NonEncodableKey;
  inputText: string;
}
