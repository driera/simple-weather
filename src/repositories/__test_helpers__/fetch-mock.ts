export const fetchMock = ({
  json = {},
  ok = true,
  status = 200
}: {
  json?: object;
  ok?: boolean;
  status?: number;
} = {}) =>
  (global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(json),
      ok,
      status
    } as Response)
  ));
