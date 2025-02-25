import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchPara] = useSearchParams();
  const lat = searchPara.get("lat");
  const lng = searchPara.get("lng");

  return [lat, lng];
}
