(() => {
    const React = vendetta.metro.common.React;
    const RN = vendetta.metro.common.ReactNative;
    const { View, Image, Dimensions } = RN;
    const sprites = {"idle":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABWklEQVR4nO2ZMW7CQBBFP1FokNLTpbSM0rixRMUZXOYWcBK4RcqcgSpSmjRRUMqcgwKqkZwR4/Xuer0aM6+zZMbeeexfew0YSinK9aUo15fc13lIfQOpeYwtwLvze/qYxda8VVfCDHCoc74mQueTGSC+d1sAwMv+ACC8o7yOC/UGghNjjDWgjTSn1BsYbA58fb4PVQoAUNVNr/PMwNCd53VdJtQb8E4hSp9UnZcgEzyN1BuwAeRGTKGxV9pQpmuAQ7PfZYbndt+0Cv3d9AzwDlMnFk/LkW7JD/UGbAC5EZ+FpLlAaUHHP6c/AMCqfO680Pzt+O/4/LrpPJ/XneyzkLcBgptIhdR5YroGiL7PRKnfie/XgAR/M+u7i+CLa49VvQHbF8pN9NeUoXcpXLnPUW8g2QCqukmWTG3UG4hOodZ/9eaK7bIQO3fMACF12pUmVd1E7T+pN2Dk5grxJ327VmscHwAAAABJRU5ErkJggg==","walk0":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABWklEQVR4nO2ZMW7CQBBFP1FokNLTpbSM0rixRMUZXOYWcBK4RcqcgSpSmjRRUMqcgwKqkZwR4/Xuer0aM6+zZMbeeexfew0YSinK9aUo15fc13lIfQOpeYwtwLvze/qYxda8VVfCDHCoc74mQueTGSC+d1sAwMv+ACC8o7yOC/UGghNjjDWgjTSn1BsYbA58fb4PVQoAUNVNr/PMwNCd53VdJtQb8E4hSp9UnZcgEzyN1BuwAeRGTKGxV9pQpmuAQ7PfZYbndt+0Cv3d9AzwDlMnFk/LkW7JD/UGbAC5EZ+FpLlAaUHHP6c/AMCqfO680Pzt+O/4/LrpPJ/XneyzkLcBgptIhdR5YroGiL7PRKnfie/XgAR/M+u7i+CLa49VvQHbF8pN9NeUoXcpXLnPUW8g2QCqukmWTG3UG4hOodZ/9eaK7bIQO3fMACF12pUmVd1E7T+pN2Dk5grxJ327VmscHwAAAABJRU5ErkJggg==","walk1":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABSklEQVR4nO2ZsQ6CMBCGf40uJu5ujgTj4mLC5DM4+hb6JPoWjj6Dk4mLi5E4+hwOOF0iFw9ooTTF+zYSPOh93rW0gBIoUZxkUZxkvp/Td/0CrhnUDcCz80wvvboxf8WVUAMcypypCdt6UgPEfbcFAMz3BwD2GeVxygjegHXHaGMO+EaqqeANNFYDt+upqVAAgMVyXek+NdB05nncMhPBGzDuQtR9XGVegkzwbhS8AR2Ab8Qu1PZMa0t3DXCo+svM8L5dtVvZ/q57BniGKROj8aSlVzIjeAM6AN+IayGpFqhb0PUjfQEAZvG08EHD4zl3/d6sCu/ncTu7FjI2QHATrpAyT3TXAFF1TeT6m/h/DUjwL7OquwimlO2xBm9A94V8Y23g67+Z61JtzQ9E8AZ0AL5p/IyMMJ0XbGtGDUiZNj2lXCzX/3lKqfjmAzHqeE4p7Vt1AAAAAElFTkSuQmCC","sleep":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABYElEQVR4nO2YoY7CQBCG/17AkJw/hyQlmDMkqHsGJG9xPAm8BZJnQJFgMBcaJA5PgkGAmuS6MN3tdpZm2v1ckzKl83VmdheIKGWQTu6DdHKv+zkfof9AaDpVA5jZOWbbpGrMV3E5ogETylxZE771FA0Qf/NfAMBosQTgn1Ezjg31Brw7xjtmwH+4mlJvQKwG9ru1VCgAwPd46nRfNCCdeTOuzYR6A6W7EHWfUJnnIBNmN1JvIL5A3bBd6N2T1hf1Bpxf4JhtE6ndliTqDTzVgPntU7/vfX4VBuImpm1e+P6OaJ4BX3wnc9WJ3jwD1GmoFugbvV7OuWvikJ0AAMO0X/ig7mqTu77Nfgrvd42r3gDb17luRJCJ0KtSbhVKNNcA4bomCr0nbq8BDnNn5nqKUBbb+ku9gdonMUdrzoUqr++lTylsfd9EvQGxGgjVhWyoNyC2x5U6xSi771ZvIBJpOw+VbnphGeF3BQAAAABJRU5ErkJggg=="};
    const SIZE = 48;
    const candidates = {
        AppContainer: 100,
        AppNavigationContainerOrEmpty: 90,
        AppNavigationContainer: 80,
        NavigationContainerInner: 70,
        NavigationContainer: 60,
        BaseNavigationContainer: 50
    };
    const PATCH_MARKER = "__onekoLayerV3";
    const unpatches = [];
    const owners = new Map();
    const subscribers = new Set();
    let enabled = false;
    let serial = 0;
    let selected = null;

    function clamp(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }

    function notify() {
        for (const fn of subscribers) fn();
    }

    function elect() {
        const previous = selected;
        selected = null;
        let best = -1;
        for (const [key, rank] of owners) {
            if (rank > best) {
                selected = key;
                best = rank;
            }
        }
        if (selected !== previous) notify();
    }

    function Cat({ owner }) {
        const windowSize = RN.useWindowDimensions ? RN.useWindowDimensions() : Dimensions.get("window");
        const width = Math.max(90, windowSize.width);
        const height = Math.max(120, windowSize.height);
        const maxX = Math.max(0, width - SIZE);
        const maxY = Math.max(0, height - SIZE);
        const point = React.useRef({x: Math.max(0, maxX - 40), y: Math.max(0, maxY - 60)});
        const target = React.useRef({...point.current});
        const walkingFrame = React.useRef(0);
        const sleepingSince = React.useRef(Date.now());
        const nextTargetAt = React.useRef(Date.now() + 1000);
        const face = React.useRef(1);
        const dragStart = React.useRef(null);
        const dragging = React.useRef(false);
        const [frame, setFrame] = React.useState({x: point.current.x, y: point.current.y, moving: false, sleep: false, walkFrame: 0, face: 1});
        const [visible, setVisible] = React.useState(enabled && selected === owner);

        React.useEffect(() => {
            const update = () => setVisible(enabled && selected === owner);
            subscribers.add(update);
            update();
            return () => subscribers.delete(update);
        }, [owner]);

        React.useEffect(() => {
            point.current.x = clamp(point.current.x, 0, maxX);
            point.current.y = clamp(point.current.y, 0, maxY);
            target.current.x = clamp(target.current.x, 0, maxX);
            target.current.y = clamp(target.current.y, 0, maxY);
            const timer = setInterval(() => {
                if (!enabled || selected !== owner || dragging.current) return;
                const now = Date.now();
                if (now >= nextTargetAt.current) {
                    target.current = {x: Math.random() * maxX, y: Math.random() * maxY};
                    nextTargetAt.current = now + 2600 + Math.random() * 2200;
                }
                const p = point.current;
                const dx = target.current.x - p.x;
                const dy = target.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const moving = dist > 1.5;
                if (moving) {
                    const speed = Math.min(5, dist);
                    p.x = clamp(p.x + dx / dist * speed, 0, maxX);
                    p.y = clamp(p.y + dy / dist * speed, 0, maxY);
                    if (Math.abs(dx) > 0.2) face.current = dx < 0 ? -1 : 1;
                    sleepingSince.current = now;
                }
                walkingFrame.current++;
                setFrame({x:p.x, y:p.y, moving, sleep: !moving && now - sleepingSince.current > 9000, walkFrame: Math.floor(walkingFrame.current / 3) % 2, face: face.current});
            }, 80);
            return () => clearInterval(timer);
        }, [maxX, maxY, owner]);

        if (!visible) return null;
        const sprite = frame.sleep ? sprites.sleep : frame.moving ?
            (frame.walkFrame ? sprites.walk1 : sprites.walk0) : sprites.idle;

        return React.createElement(View, {
            pointerEvents: "box-none",
            collapsable: false,
            style: {position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 999999, elevation: 30}
        }, React.createElement(View, {
            collapsable: false,
            style: {position: "absolute", left: frame.x, top: frame.y, width: SIZE, height: SIZE},
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            onResponderGrant: (event) => {
                dragging.current = true;
                const e = event.nativeEvent;
                dragStart.current = {x:point.current.x, y:point.current.y, pageX:e.pageX, pageY:e.pageY};
            },
            onResponderMove: (event) => {
                const start = dragStart.current;
                const e = event.nativeEvent;
                if (!start || !Number.isFinite(e.pageX) || !Number.isFinite(e.pageY)) return;
                const x = clamp(start.x + e.pageX - start.pageX, 0, maxX);
                const y = clamp(start.y + e.pageY - start.pageY, 0, maxY);
                point.current = {x, y};
                target.current = {x, y};
                sleepingSince.current = Date.now();
                setFrame(old => ({...old, x, y, moving:false, sleep:false}));
            },
            onResponderRelease: () => {
                dragStart.current = null;
                dragging.current = false;
                nextTargetAt.current = Date.now() + 1500;
            },
            onResponderTerminate: () => {
                dragging.current = false;
                dragStart.current = null;
            }
        }, React.createElement(Image, {
            source: {uri: sprite},
            fadeDuration: 0,
            resizeMode: "contain",
            style: {width: SIZE, height: SIZE, transform: [{scaleX: frame.face}]}
        })));
    }

    function Layer({child, rank}) {
        const id = React.useRef(null);
        if (id.current === null) id.current = ++serial;
        React.useEffect(() => {
            owners.set(id.current, rank);
            elect();
            return () => {
                owners.delete(id.current);
                elect();
            };
        }, [rank]);
        return React.createElement(View, {
            pointerEvents: "box-none",
            collapsable: false,
            style: {flex: 1}
        }, child, React.createElement(Cat, {owner: id.current}));
    }

    function typeName(component) {
        if (!component) return "";
        return component.displayName || component.name || component.type?.displayName || component.type?.name || component.render?.displayName || component.render?.name || "";
    }

    function maybeWrap(component, element) {
        if (!enabled || !element || element.props?.[PATCH_MARKER]) return element;
        const rank = candidates[typeName(component)];
        if (!rank) return element;
        return React.createElement(Layer, {[PATCH_MARKER]: true, child: element, rank});
    }

    function onLoad() {
        if (enabled) return;
        enabled = true;
        const patcher = vendetta.patcher;
        const addPatch = (method, target, handler) => {
            try {
                if (typeof target?.[method] === "function") {
                    unpatches.push(patcher.after(method, target, handler));
                }
            } catch (e) {
                vendetta.logger?.warn?.("oneko patch failed", method, e);
            }
        };
        const runtime = vendetta.metro.findByProps("jsx", "jsxs");
        if (runtime) {
            for (const name of ["jsx", "jsxs", "jsxDEV"]) {
                if (typeof runtime[name] !== "function") continue;
                addPatch(name, runtime, (args, result) => maybeWrap(args[0], result));
            }
        }
        const rawReact = vendetta.metro.findByProps("createElement", "cloneElement") || React;
        if (typeof rawReact.createElement === "function") {
            addPatch("createElement", rawReact, (args, result) => maybeWrap(args[0], result));
        }
        for (const [exportName, rank] of [["BaseNavigationContainer", 65], ["NavigationContainer", 75]]) {
            try {
                const mod = vendetta.metro.findByProps(exportName);
                const component = mod?.[exportName];
                if (component && typeof component.render === "function") {
                    addPatch("render", component, (args, result) => {
                        if (!enabled || !result || result.props?.[PATCH_MARKER]) return result;
                        return React.createElement(Layer, {[PATCH_MARKER]: true, child: result, rank});
                    });
                }
            } catch (e) {
                vendetta.logger?.warn?.("oneko navigation patch failed", exportName, e);
            }
        }
        notify();
    }

    function onUnload() {
        enabled = false;
        while (unpatches.length) {
            try { unpatches.pop()(); } catch (_) {}
        }
        notify();
    }

    return {onLoad, onUnload};
})()