export interface coordinate {
  latitude: number | null;
  longitude: number | null;
}

export interface location {
  coords?: coordinate;
  timestamp?: number;
  mocked?: boolean;
}

export interface action {
  type: string;
  myLocation?: location;
  coordinate?: coordinate;
  payload?: any;
}

export interface state {
  startPoint?: coordinate;
  goalPoint?: coordinate;
  myLocation?: location;
}
