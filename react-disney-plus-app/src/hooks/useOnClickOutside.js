import { useEffect } from "react";

function useOnclickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			//안을 클릭했다면 리턴
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			//아니면 handler 호출
			handler();
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		}
	}, [ref, handler]);

	return <div>useOnclickOutside</div>;
}

export default useOnclickOutside;