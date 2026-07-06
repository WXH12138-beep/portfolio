/* ============================================
   个人作品集 — 交互逻辑 v2
   ============================================ */

// ---- 项目详情数据 ----
const projectData = {
  fudao: {
    title: '茯道金花',
    subtitle: '茯茶品牌视觉传达全案设计',
    category: '品牌设计',
    type: '品牌视觉传达',
    role: '视觉设计 & 动效',
    tools: 'Illustrator / Photoshop / After Effects',
    team: '顾嘉鑫(Vis) / 张轩领(Mot) / 王旭宏(UI) / 谷建元(Ins)',
    chapters: [
      {
        title: '背景',
        subtitle: 'BRAND BACKGROUND',
        text: '茯茶，因在加工过程中产生「金花」（冠突散囊菌）而得名，是黑茶中最具特色的一类。我们接到这个课题时，面对的核心问题是：如何让一个承载着数百年历史的传统茶饮品牌，在当代消费市场中焕发出新的生命力？茯茶的文化底蕴深厚，但市场上多数品牌的视觉表达仍停留在传统的书法+山水套路，缺乏现代感和辨识度。',
        images: ['01.png', '02.png']
      },
      {
        title: '理念',
        subtitle: 'DESIGN CONCEPT',
        text: '我们从「金花」这一独特的生物现象中提取灵感——它在特定条件下自然生长，是时间与自然的馈赠。品牌视觉以「金花」的纹理和色彩为核心符号，结合现代极简设计语言，传递出「时间沉淀、自然生花」的品牌哲学。我们希望这套视觉系统既有文化的厚度，又有当代的锐利感。',
        images: ['03.png', '04.png', '05.png']
      },
      {
        title: '设计',
        subtitle: 'VISUAL SYSTEM',
        text: '品牌标志以「金花」的微观纹理为基础，通过几何化处理形成独特的品牌图形。色彩体系提取自茯茶汤色的琥珀金与茶叶的深棕，搭配大面积的留白营造呼吸感。包装系统采用模块化设计，不同产品线通过色彩编码区分，同时保持家族式的统一识别。整套系统涵盖标志规范、色彩字体、包装、海报、名片等全方位物料。',
        images: ['06.png', '07.png', '08.png', '09.png']
      },
      {
        title: '成果',
        subtitle: 'FINAL RESULT',
        text: '最终完成了茯道金花的完整品牌视觉识别系统，从标志到包装、从线上到线下，建立了统一且富有辨识度的品牌形象。动态视频宣传短片进一步丰富了品牌的表达维度，将静态的视觉语言延伸为沉浸式的品牌体验。',
        images: ['10.png', '11.png', '12.png', '13.png', '14.png']
      }
    ],
    imageDir: 'assets/detail/fudao/',
    imageExt: 'png',
    imageCount: 18,
    videoPath: 'assets/video/fudao.mp4'
  },

  uiux: {
    title: '学习伴侣 App',
    subtitle: '教育类应用全套界面设计',
    category: 'UI/UX',
    type: '移动端 UI 设计',
    role: 'UI/UX 设计（独立完成）',
    tools: 'Figma / Illustrator / After Effects',
    team: '个人项目',
    chapters: [
      {
        title: '背景',
        subtitle: 'PROJECT BACKGROUND',
        text: '大学学习场景中存在一个普遍痛点：学习往往是孤独的。同学们在同一个教室里听课，却很少有机会找到志同道合的学习伙伴。我想设计一款 App，不仅能管理学习进度，还能帮助学生找到合适的学习伙伴，让学习变得更有陪伴感和动力。',
        images: ['00.png', '02.png']
      },
      {
        title: '理念',
        subtitle: 'DESIGN PHILOSOPHY',
        text: '「陪伴式学习」是这款 App 的核心设计理念。我希望界面传达的不是冰冷的工具感，而是一种温暖、有活力的氛围。在视觉上选择了明亮的色彩搭配圆润的图标风格，在交互上注重信息的层级清晰和操作的高效流畅。每一个页面都经过反复推敲，力求在功能完整性和视觉简洁性之间找到平衡。',
        images: ['03.png', '04.png', '05.png']
      },
      {
        title: '设计',
        subtitle: 'COMPLETE UI SYSTEM',
        text: '整套设计包含 60+ 页面，覆盖启动引导、注册登录、首页、课程管理、学习大厅、学习伙伴匹配、社区交流、个人中心等核心模块。我建立了一套完整的设计组件库，包含色彩规范、字体层级、按钮样式、卡片组件等，确保整个 App 的视觉一致性。匹配功能的设计是重点——通过兴趣标签和学习目标的智能匹配，帮助学生找到最合适的学习搭档。',
        images: ['06.png', '07.png', '08.png', '09.png', '10.png']
      },
      {
        title: '成果',
        subtitle: 'DELIVERABLES',
        text: '最终交付了一套包含 56 个完整界面的高保真设计稿，以及配套的交互动效视频。从最初的线框图到高保真原型，经历了多轮迭代和优化。这套作品完整展示了从需求分析到视觉落地的 UI 设计全流程能力。',
        images: ['01.png', '11.png', '12.png', '13.png', '14.png', '15.png']
      }
    ],
    imageDir: 'assets/detail/uiux/',
    imageExt: 'png',
    imageCount: 56,
    videoPath: 'assets/video/uiux.mp4'
  },

  quehua: {
    title: '鹊华秋色图',
    subtitle: '传世名画数字化动态再创作',
    category: '文化创意',
    type: '数字艺术 & 动画',
    role: '创意视觉 & 动画',
    tools: 'Photoshop / After Effects / Unity',
    team: '个人项目',
    chapters: [
      {
        title: '背景',
        subtitle: 'CULTURAL CONTEXT',
        text: '《鹊华秋色图》是元代画家赵孟頫的传世名作，描绘了济南鹊山和华不注山的秋日景色，被誉为中国绘画史上的杰作之一。这个项目提出了一个有趣的挑战：如何用当代的数字媒体手段，让一幅 700 多年前的静态画作「活」起来？',
        images: ['03.png', '04.png']
      },
      {
        title: '理念',
        subtitle: 'ANIMATION CONCEPT',
        text: '我的思路不是简单地给画加上动效，而是在尊重原作美学的基础上，通过分层处理让画面中的不同元素产生各自的动态节奏。水在流、树在摇、船在行、人在动——这些微妙的运动让整幅画从凝固的瞬间变成了一个可以呼吸的世界。关键在于动得要克制，不能破坏原画的笔墨韵味。',
        images: ['05.png', '06.png', '07.png']
      },
      {
        title: '设计',
        subtitle: 'PRODUCTION PROCESS',
        text: '首先在 Photoshop 中对高清画作进行精细的分层处理——将水面、山峦、树木、建筑、人物等元素分离到不同图层。然后在 After Effects 中为每一层设计独立的动画：使用位移、缩放、形变等基础动画，配合粒子效果模拟水面波纹和树叶飘动。整个项目制作了 30+ 帧序列画面，最终合成完整的动态影像短片。',
        images: ['08.png', '09.png', '10.png', '11.png']
      },
      {
        title: '成果',
        subtitle: 'FINAL OUTPUT',
        text: '完成了动态影像短片《鹊华归梦》，将静态的传世名画转化为富有诗意的动态视觉体验。项目探索了传统文化数字化的可能性——古老的画作不只是博物馆中的陈列品，它可以在数字世界中重新焕发生命力。32 帧画面每一帧都可以独立作为视觉作品呈现。',
        images: ['12.png', '13.png', '14.png', '15.png', '16.png']
      }
    ],
    imageDir: 'assets/detail/quehua/',
    imageExt: 'png',
    imageCount: 32,
    videoPath: 'assets/video/quehua.mp4'
  },

  loujian: {
    title: '耧见文明',
    subtitle: '农耕文化视觉设计（团队协作）',
    category: '文化创意',
    type: '文化视觉设计',
    role: '视觉设计',
    tools: 'Illustrator / Photoshop / After Effects / Unity',
    team: '仇伟森 / 王旭宏 / 范哲明',
    chapters: [
      {
        title: '背景',
        subtitle: 'PROJECT BRIEF',
        text: '中国传统农耕文明绵延数千年，留下了大量珍贵的物质和非物质文化遗产。然而这些智慧正在被现代社会的快节奏所遗忘。我们三人团队选择了「耧车」——一种古老的播种农具——作为切入点，尝试用当代视觉设计的手法，重新诠释农耕文明的智慧与美学。',
        images: ['01.png', '02.png']
      },
      {
        title: '理念',
        subtitle: 'CREATIVE APPROACH',
        text: '「耧见」谐音「遇见」，寓意通过耧车这个媒介与古老的农耕文明相遇。我们从耧车的机械结构之美出发，延伸出整套视觉语言：几何化的图形元素取自耧车的构件，色彩提取自泥土和庄稼的自然色调。通过插画、信息图表、动态影像等形式，让农耕知识变得可视化、有趣味。',
        images: ['03.png', '04.png', '05.png']
      },
      {
        title: '过程',
        subtitle: 'COLLABORATION',
        text: '作为三人团队项目，我们进行了明确的分工协作。从前期调研到概念脑暴，再到具体的设计执行，每一步都是团队讨论的结果。我主要负责视觉设计的执行和部分动效制作。这个项目让我深刻体会到团队协作中沟通的重要性——如何在保持个人设计判断的同时，与团队达成视觉上的统一。',
        images: ['06.png', '07.png', '08.png', '09.png']
      },
      {
        title: '成果',
        subtitle: 'OUTCOME',
        text: '项目包含品牌视觉系统、系列文化海报、信息图表设计以及动态视频等完整输出。最终呈现既保持了学术调研的严谨性，又具有视觉设计的感染力，实现了文化传播与设计美学的融合。',
        images: ['10.png', '11.png', '12.png', '13.png']
      }
    ],
    imageDir: 'assets/detail/loujian/',
    imageExt: 'png',
    imageCount: 16,
    videoPath: 'assets/video/loujian.mp4'
  },

  mengxiang: {
    title: '蒙镶錾刻',
    subtitle: '蒙古族非遗工艺视觉设计',
    category: '品牌设计',
    type: '非遗文化设计',
    role: '视觉设计',
    tools: 'Photoshop / Illustrator',
    team: '个人项目',
    chapters: [
      {
        title: '背景',
        subtitle: 'HERITAGE CONTEXT',
        text: '蒙古族金属镶嵌錾刻工艺是一项珍贵的非物质文化遗产，承载着游牧民族独特的审美智慧和精湛的手工技艺。然而，随着现代化进程加速，这门手艺正面临着传承断层的危机。我想用视觉设计的方式，为这项古老的工艺留下记录，也让更多人有机会了解它的美。',
        images: ['01.jpg', '02.jpg']
      },
      {
        title: '理念',
        subtitle: 'DESIGN VISION',
        text: '设计中我尽量保持「记录者」的姿态，而非过度「创作者」。工艺本身已经足够美——银器的光泽、錾刻的纹理、匠人的手势——这些画面自有力量。我的工作是通过编排和视觉组织，让这些记录呈现出更好的叙事节奏和阅读体验。',
        images: ['03.jpg']
      }
    ],
    imageDir: 'assets/detail/mengxiang/',
    imageExt: 'jpg',
    imageCount: 3,
    videoPath: 'assets/video/mengxiang.mp4'
  },

  wutasi: {
    title: '五塔寺 IP 动画',
    subtitle: '文化遗产 IP 角色动画设计',
    category: '动画设计',
    type: 'IP 设计 & 动画',
    role: '角色设计 & 动画制作',
    tools: 'Illustrator / After Effects',
    team: '个人项目',
    chapters: [
      {
        title: '背景',
        subtitle: 'CULTURAL SOURCE',
        text: '五塔寺（金刚座舍利宝塔）位于呼和浩特，是内蒙古最具代表性的佛教建筑之一。项目目标是基于这一文化遗产，设计一个具有蒙古文化特色的 IP 角色，并通过动画赋予它生命力，让文化遗产以更亲和、更年轻的方式走进大众视野。',
        images: ['01.png', '02.png']
      },
      {
        title: '设计',
        subtitle: 'CHARACTER DESIGN',
        text: '角色设计融合了三重元素：五塔寺的建筑轮廓特征（五塔的造型）、蒙古族传统服饰的色彩和纹样、以及可爱亲和的卡通化表达。我制作了角色的三视图设定和多种表情，确保角色在不同场景下都能保持一致的识别度和表现力。动画部分设计了角色的标志性动作和简单的场景互动。',
        images: ['03.png']
      }
    ],
    imageDir: 'assets/detail/wutasi/',
    imageExt: 'png',
    imageCount: 3,
    videoPath: 'assets/video/wutasi.mp4'
  },

  aigcmv: {
    title: 'AIGC 创作 MV',
    subtitle: 'AIGC 创意音乐短片',
    category: '动画设计',
    type: 'AIGC 视频创作',
    role: 'AI 创作 & 剪辑',
    tools: 'ChatGPT / Midjourney / Runway / After Effects',
    team: '个人项目',
    chapters: [],
    imageDir: 'assets/detail/aigcmv/',
    imageExt: 'jpg',
    imageCount: 1,
    videoPath: 'assets/video/aigc_mv.mp4',
    directVideo: true
  }
};


document.addEventListener('DOMContentLoaded', () => {

  // ---- 导航栏滚动效果 ----
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // ---- 导航高亮当前区域 ----
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // ---- 移动端汉堡菜单 ----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---- 滚动渐入动画 ----
  const revealElements = document.querySelectorAll('.reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- 数字计数动画 ----
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statsObserver.observe(el));

  // ---- 作品筛选 ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workItems.forEach((item, i) => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          item.classList.remove('fade-out');
          // Stagger re-entrance
          item.style.transitionDelay = `${i * 0.08}s`;
        } else {
          item.classList.add('fade-out');
          item.style.transitionDelay = '0s';
          setTimeout(() => {
            item.classList.add('hidden');
          }, 400);
        }
      });

      // Clear delays after animation
      setTimeout(() => {
        workItems.forEach(item => { item.style.transitionDelay = '0s'; });
      }, 600);
    });
  });

  // ---- 卡片鼠标跟随光效 ----
  workItems.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.setProperty('--glow-x', `${x}%`);
        glow.style.setProperty('--glow-y', `${y}%`);
      }
    });
  });

  // ---- 卡片/特写 滚动揭示（交错） ----
  const workCards = document.querySelectorAll('.work-card, .featured-card');

  const cardRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find the index among siblings for stagger
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.work-card, .featured-card'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.12}s`;
        entry.target.classList.add('revealed');
        cardRevealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  workCards.forEach(card => cardRevealObserver.observe(card));

  // ---- Featured card click ----
  document.querySelectorAll('[data-project]').forEach(el => {
    el.addEventListener('click', () => {
      const projectKey = el.getAttribute('data-project');
      if (projectKey && projectData[projectKey]) {
        openModal(projectKey);
      }
    });
  });

  // ============================================
  // 作品详情弹窗系统
  // ============================================
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');

  let currentImages = [];
  let currentIndex = 0;

  // 打开弹窗
  const openModal = (projectKey) => {
    const project = projectData[projectKey];
    if (!project) return;

    const isDirectVideo = project.directVideo === true;

    // Hero 横幅 — directVideo 模式隐藏
    const heroImg = document.getElementById('storyHeroImg');
    const heroSection = document.getElementById('storyHero');
    if (isDirectVideo) {
      heroSection.style.display = 'none';
    } else {
      heroSection.style.display = '';
      heroImg.src = `${project.imageDir}01.${project.imageExt}`;
      heroImg.alt = project.title;
      document.getElementById('storyHeroCat').textContent = project.category;
      document.getElementById('storyHeroTitle').textContent = project.title;
      document.getElementById('storyHeroSubtitle').textContent = project.subtitle;
    }

    // 信息栏 — directVideo 模式简化
    const infoBar = document.querySelector('.project-info-bar');
    if (isDirectVideo) {
      if (infoBar) infoBar.style.display = 'none';
    } else {
      if (infoBar) infoBar.style.display = '';
      document.getElementById('modalType').textContent = project.type;
      document.getElementById('modalRole').textContent = project.role;
      document.getElementById('modalTools').textContent = project.tools;
      document.getElementById('modalTeam').textContent = project.team;
    }

    // 渲染章节
    const chaptersEl = document.getElementById('storyChapters');
    chaptersEl.innerHTML = '';

    if (project.chapters && !isDirectVideo) {
      project.chapters.forEach((chapter, cIdx) => {
        const chapterEl = document.createElement('div');
        chapterEl.className = 'story-chapter';

        // 章节编号和标题
        const num = String(cIdx + 1).padStart(2, '0');
        let html = `
          <div class="chapter-header">
            <span class="chapter-num">${num}</span>
            <div>
              <span class="chapter-subtitle">${chapter.subtitle}</span>
              <h3 class="chapter-title">${chapter.title}</h3>
            </div>
          </div>
          <div class="chapter-body">
            <p class="chapter-text">${chapter.text}</p>
          </div>
        `;

        // 图片画廊
        if (chapter.images && chapter.images.length > 0) {
          html += `<div class="chapter-gallery">`;
          chapter.images.forEach((img, iIdx) => {
            // Alternate layout: first image full-width, rest in a grid
            const isFullWidth = iIdx === 0 && chapter.images.length > 2;
            html += `
              <div class="chapter-gallery-item ${isFullWidth ? 'gallery-item-wide' : ''}">
                <img src="${project.imageDir}${img}" alt="${project.title} - ${chapter.title}" loading="lazy">
              </div>
            `;
          });
          html += `</div>`;
        }

        chapterEl.innerHTML = html;
        chaptersEl.appendChild(chapterEl);
      });
    }

    // 视频章节
    if (project.videoPath) {
      const videoChapter = document.createElement('div');
      videoChapter.className = 'story-chapter';
      if (isDirectVideo) {
        // 直接视频模式：全屏视频，无章节头部
        videoChapter.innerHTML = `
          <div class="chapter-body">
            <div class="chapter-video" style="margin-top: 40px;">
              <video controls autoplay preload="auto" poster="${project.imageDir}01.${project.imageExt}" style="width:100%; max-height:75vh; border-radius:12px;">
                <source src="${project.videoPath}" type="video/mp4">
              </video>
            </div>
          </div>
        `;
      } else {
        videoChapter.innerHTML = `
          <div class="chapter-header">
            <span class="chapter-num">▶</span>
            <div>
              <span class="chapter-subtitle">MOTION</span>
              <h3 class="chapter-title">动态展示</h3>
            </div>
          </div>
          <div class="chapter-body">
            <div class="chapter-video">
              <video controls preload="none" poster="${project.imageDir}01.${project.imageExt}">
                <source src="${project.videoPath}" type="video/mp4">
              </video>
            </div>
          </div>
        `;
      }
      chaptersEl.appendChild(videoChapter);
    }

    // 图片列表（保留用于可能的键盘导航）
    currentImages = [];
    for (let i = 1; i <= project.imageCount; i++) {
      const num = String(i).padStart(2, '0');
      currentImages.push(`${project.imageDir}${num}.${project.imageExt}`);
    }

    // 打开弹窗
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // 滚动到顶部
    const modalScroll = document.getElementById('modalScroll');
    if (modalScroll) modalScroll.scrollTop = 0;
  };

  // 关闭弹窗
  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modal.querySelectorAll('video').forEach(v => v.pause());
    // 恢复 hero 和信息栏（directVideo 模式关闭后需重置）
    const heroSection = document.getElementById('storyHero');
    const infoBar = document.querySelector('.project-info-bar');
    if (heroSection) heroSection.style.display = '';
    if (infoBar) infoBar.style.display = '';
  };

  // 事件绑定
  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ---- 键盘导航 ----
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
  });

  // ---- 平滑滚动 ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ---- 视差效果 ----
  const decoCircles = document.querySelectorAll('.deco-circle');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      decoCircles.forEach((circle, i) => {
        const speed = (i + 1) * 0.05;
        circle.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
  });

});
