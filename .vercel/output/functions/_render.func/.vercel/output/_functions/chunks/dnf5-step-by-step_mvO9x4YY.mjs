import { _ as __astro_tag_component__, F as Fragment, V as createVNode } from './astro_uM0hqRJo.mjs';
import { v as $$Image } from './pages/__o-4sg6ds.mjs';
import 'clsx';

const frontmatter = {
  "author": "Corentin GS",
  "heroImage": "../../assets/blog/dnf5-step-by-step.webp",
  "category": "Linux",
  "description": "Dnf5 is the new, faster, and more powerful package manager for Fedora. This blog post will show you how to replace dnf with dnf5 on your Fedora system.",
  "pubDate": "2023-04-28T22:00:00.000Z",
  "tags": ["Fedora", "dnf5"],
  "title": "Upgrading to dnf5: A step-by-step guide for Fedora users",
  "minutesRead": "2 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "whats-the-difference-between-dnf5-and-dnf",
    "text": "What\u2019s the difference between dnf5 and dnf ?"
  }, {
    "depth": 2,
    "slug": "why-should-i-upgrade-to-dnf5",
    "text": "Why should I upgrade to dnf5?"
  }, {
    "depth": 2,
    "slug": "how-to-upgrade-to-dnf5",
    "text": "How to upgrade to dnf5?"
  }, {
    "depth": 3,
    "slug": "step-1-install-dnf5",
    "text": "Step 1: Install dnf5"
  }, {
    "depth": 3,
    "slug": "step-2-create-an-alias-for-dnf5-optional",
    "text": "Step 2: Create an alias for dnf5 (optional)"
  }, {
    "depth": 2,
    "slug": "disclaimer",
    "text": "Disclaimer"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "DNF5 is Fedora\u2019s new, faster, and more powerful package manager. Although it is still in development and won\u2019t be the default package manager until Fedora 39, you can install it now and start using it.\nThis blog post will show you how to replace DNF with DNF5 on your Fedora system."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "whats-the-difference-between-dnf5-and-dnf",
      children: "What\u2019s the difference between dnf5 and dnf ?"
    }), "\n", createVNode(_components.p, {
      children: ["DNF is an old, single-threaded package manager with much legacy code. It\u2019s written in Python and is usually described as slow by users. ", createVNode("br", {}), "DNF5, on the other hand, is a complete rewrite of DNF written in C++. It\u2019s multi-threaded, has a better user experience, should be easier to maintain, and is faster."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "why-should-i-upgrade-to-dnf5",
      children: "Why should I upgrade to dnf5?"
    }), "\n", createVNode(_components.p, {
      children: ["Upgrading to DNF5 offers several benefits, including improved speed and efficiency.\nDNF5 is designed to be faster and more efficient than DNF, which can help speed up your system\u2019s package installation and update process. ", createVNode("br", {}), "Additionally, as it will be the default package manager in ", createVNode("a", {
        href: "https://github.com/rpm-software-management/dnf5/issues/411",
        class: "font-bold underline text-accent",
        target: "_blank",
        rel: "noopener",
        children: "Fedora\n39"
      }), ", starting to use it now and reporting any bugs you encounter will help the developers fix them before the release."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "how-to-upgrade-to-dnf5",
      children: "How to upgrade to dnf5?"
    }), "\n", createVNode(_components.h3, {
      id: "step-1-install-dnf5",
      children: createVNode(_components.strong, {
        children: "Step 1: Install dnf5"
      })
    }), "\n", createVNode(_components.p, {
      children: "To install DNF5 from the unstable repository, run the following command:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " copr"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " enable"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " rpmsoftwaremanagement/dnf5-unstable"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf5"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf5-plugins"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "If you\u2019re using sudo, use this command instead:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " copr"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " enable"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " rpmsoftwaremanagement/dnf5-unstable"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf5"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " dnf5-plugins"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h3, {
      id: "step-2-create-an-alias-for-dnf5-optional",
      children: createVNode(_components.strong, {
        children: "Step 2: Create an alias for dnf5 (optional)"
      })
    }), "\n", createVNode(_components.p, {
      children: "You can create an alias if you want to use DNF5 instead of DNF. Run the following command:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "alias"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "dnf5"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["To make this alias permanent, add it to your ", createVNode(_components.code, {
        children: "~/.bashrc"
      }), " file:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "alias dnf="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "dnf5"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " >>"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " ~/.bashrc"
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Or add it to your ", createVNode(_components.code, {
        children: "~/.zshrc"
      }), " file if you use zsh:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "alias dnf="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "dnf5"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " >>"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "disclaimer",
      children: "Disclaimer"
    }), "\n", createVNode(_components.p, {
      children: "Remember that DNF5 is still in development and not ready for production use. It may contain bugs and should not be used on production systems. Use it at your own risk. I am not responsible for any damage caused by using DNF5."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["DNF5 may still have some bugs, so it\u2019s essential to experiment with it and keep this blog post up-to-date with the latest changes.\nThis guide helped you upgrade to DNF5. If you have any questions or suggestions, feel free to contact me on ", createVNode("a", {
        href: "https://twitter.com/GSCorentinDev",
        target: "_blank",
        rel: "noopener",
        class: "font-bold underline text-accent",
        children: "Twitter"
      }), " or ", createVNode("a", {
        href: "https://corentings.dev/discord",
        target: "_blank",
        rel: "noopener",
        class: "font-bold underline text-accent",
        children: "Discord"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://fedoraproject.org/wiki/Changes/ReplaceDnfWithDnf5",
          class: "font-bold underline text-accent",
          target: "_blank",
          rel: "noopener",
          children: "Fedora Project"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://www.reddit.com/r/Fedora/comments/12jv7uc/what_is_the_state_of_affairs_with_fedora_38_and/",
          target: "_blank",
          rel: "noopener",
          class: "font-bold underline text-accent",
          children: "r/fedora"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://github.com/rpm-software-management/dnf5/issues/411",
          class: "font-bold underline text-accent",
          target: "_blank",
          rel: "noopener",
          children: "Github issue"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/dnf5-step-by-step.mdx";
const file = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
