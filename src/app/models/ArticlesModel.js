const ArticleModel = {aria: "awards.programming", icon: "file-alt", target:"_blank", text: null, href: null, type:"article"};

const articleConstructor = ({title, canonical_url, type_of
}) => {
	return Object.assign(
		{...ArticleModel}, { text: title, href: canonical_url, type: type_of}
	);
};

export default ArticleModel;
export {articleConstructor};


