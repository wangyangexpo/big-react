export type Container = Element | Document;
export type Instance = Element;
export type TextInstanve = Text;

export const createInstance = (type: string) => {
	return document.createElement(type);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendInitialChild = (parent: Instance, child: Instance) => {
	parent.appendChild(child);
};
