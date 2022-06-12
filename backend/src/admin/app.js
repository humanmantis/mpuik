import Logo from "./extensions/logo.png";
import MenuLogo from "./extensions/menu-logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: favicon,
    },
    locales: ["uk", "en"],
    menu: {
      logo: MenuLogo,
    },
    tutorials: false,
    notifications: { release: false },
    translations: {
      en: {
        "app.components.HomePage.community": "Main Links",
        "app.components.HomePage.community.content": " ",
        "global.documentation": "News",
        "app.components.BlockLink.documentation.content":
          "Click to open News list",
        "app.components.BlockLink.code": "Pages",
        "app.components.BlockLink.code.content": "Click to open Pages list",
        "app.components.BlockLink.tutorial": "Medialibrary",
        "app.components.BlockLink.tutorial.content":
          "Click to open Medialibrary",
        "app.components.HomePage.welcomeBlock.content.again": " ",
        "app.components.HomePage.welcomeBlock.content": " ",
        "app.components.LeftMenu.navbrand.title": "Cafedra Page",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      },
      uk: {
        "app.components.HomePage.community": "Основні посилання",
        "app.components.HomePage.community.content": " ",
        "global.documentation": "Новини",
        "app.components.BlockLink.documentation.content":
          "Натисніть, щоб відкрити список новин",
        "app.components.BlockLink.code": "Сторінки",
        "app.components.BlockLink.code.content":
          "Натисність, щоб відкрити список сторінок",
        "app.components.BlockLink.tutorial": "Медіатека",
        "app.components.BlockLink.tutorial.content":
          "Натисніть, щоб відкрити медіатеку",
        "app.components.HomePage.welcomeBlock.content.again": " ",
        "app.components.HomePage.welcomeBlock.content": " ",
        "app.components.LeftMenu.navbrand.title": "Кафедра МПУіК",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.components.Oops.text": "Ваш акаунт призупинено.",
        "Auth.components.Oops.text.admin":
          "Якщо це помилка, будь ласка, зв'яжіться з адміністратором.",
        "Auth.components.Oops.title": "Ой-йой...",
        "Auth.form.button.login.providers.error":
          "Ми не можемо підключити вас через вибраного провайдера.",
        "Auth.form.button.login.strapi": "Ввійти через Strapi",
        "Auth.form.button.password-recovery": "Відновлення паролю",
        "Auth.form.confirmPassword.label": "Підтвердження паролю",
        "Auth.form.currentPassword.label": "Поточний пароль",
        "Auth.form.email.placeholder": "напр., kai@doe.com",
        "Auth.form.error.blocked": "Ваш акаунт заблоковано адміністратором.",
        "Auth.form.error.password.format":
          "Ваш пароль не може містити символ `$` більше трьох разів.",
        "Auth.form.firstname.label": "Ім'я",
        "Auth.form.firstname.placeholder": "напр., Тарас",
        "Auth.form.lastname.label": "Прізвище",
        "Auth.form.lastname.placeholder": "напр., Шевченко",
        "Auth.form.password.hide-password": "Приховати пароль",
        "Auth.form.password.hint":
          "Повинен містити як мінімум 8 символі, 1 літеру у верхньому регістрі, 1 літеру в нижньому регістрі та 1 цифру",
        "Auth.form.password.show-password": "Показати пароль",
        "Auth.form.register.news.label":
          "Тримайте мене в курсі нових функцій і майбутніх покращень (таким чином ви приймаєте {terms} і {policy})",
        "Auth.form.register.subtitle":
          "Облікові дані використовуються лише для аутентифікації в адмін. панель. Усі збережені дані будуть збережені у вашій базі даних.",
        "Auth.form.rememberMe.label": "Запам'ятати мене",
        "Auth.form.username.label": "Ім'я користувача",
        "Auth.form.username.placeholder": "напр., Kai_Doe",
        "Auth.form.welcome.subtitle": "Увійдіть у свій обліковий запис",
        "Auth.form.welcome.title": "Вітаємо!",
        "Auth.link.signin": "Увійти",
        "Auth.link.signin.account": "Уже маєте акаунт?",
        "Auth.login.sso.divider": "Або увійдіть з",
        "Auth.login.sso.loading": "Завантаження...",
        "Auth.login.sso.subtitle": "Увійдіть через SSO",
        "Roles.ListPage.notification.delete-all-not-allowed":
          "Деякі ролі не вдалося видалити, оскільки вони пов'язані з користувачами",
        "Roles.ListPage.notification.delete-not-allowed":
          "Роль не може бути видалена, якщо вона пов'язана з користувачами",
        "Roles.RoleRow.select-all": "Виберіть {name} для масових дій",
        "Roles.RoleRow.user-count":
          "{number, plural, =0 {#  користувачів} one {#  користувач} other {# користувачів}}",
        "Roles.components.List.empty.withSearch":
          "Немає ролі, яка відповідає пошуку ({search})...",
        "Settings.PageTitle": "Налаштування - {name}",
        "Settings.apiTokens.addFirstToken": "Додайте свій перший API Token",
        "Settings.apiTokens.addNewToken": "Додати новий API Token",
        "Settings.apiTokens.copy.editMessage":
          "З міркувань безпеки ви можете побачити свій Token лише один раз.",
        "Settings.apiTokens.copy.editTitle": "Цей Token більше недоступний.",
        "Settings.apiTokens.copy.lastWarning":
          "Обов'язково скопіюйте цей Token, ви більше не зможете його побачити!",
        "Settings.apiTokens.create": "Створити новий Token API",
        "Settings.apiTokens.description":
          "Список згенерованих Token'ів для використання API",
        "Settings.apiTokens.emptyStateLayout": "У вас ще немає вмісту...",
        "Settings.apiTokens.notification.copied":
          "Маркер скопійовано в буфер обміну.",
        "Settings.apiTokens.title": "Token'и API",
        "Settings.apiTokens.types.full-access": "Повний доступ",
        "Settings.apiTokens.types.read-only": "Лише читання",
        "Settings.application.description":
          "Загальна інформація панелі адміністрування",
        "Settings.application.edition-title": "поточний план",
        "Settings.application.get-help": "Отримати допомогу",
        "Settings.application.link-pricing": "Переглянути всі тарифні плани",
        "Settings.application.link-upgrade": "Оновити панель адміністратора",
        "Settings.application.node-version": "версія вузла",
        "Settings.application.strapi-version": "strapi версія",
        "Settings.application.strapiVersion": "версія strapi",
        "Settings.application.title": "Огляд",
        "Settings.permissions": "Панель адміністрування",
        "Settings.permissions.category": "Налаштування дозволів для {category}",
        "Settings.permissions.category.plugins":
          "Налаштування дозволів для плагіна {category}",
        "Settings.permissions.conditions.anytime": "У будь-який час",
        "Settings.permissions.conditions.apply": "Застосувати",
        "Settings.permissions.conditions.can": "Можна",
        "Settings.permissions.conditions.define-conditions": "Визначити умови",
        "Settings.permissions.conditions.links": "Посилання",
        "Settings.permissions.conditions.no-actions":
          "Спочатку вам потрібно вибрати дії (створювати, читати, оновлювати, ...), перш ніж визначати умови для них.",
        "Settings.permissions.conditions.none-selected": "У будь-який час",
        "Settings.permissions.conditions.or": "АБО",
        "Settings.permissions.conditions.when": "Коли",
        "Settings.permissions.select-all-by-permission":
          "Вибрати всі дозволи {label}",
        "Settings.permissions.select-by-permission": "Вибрати дозвіл {label}",
        "Settings.permissions.users.create": "Запросити нового користувача",
        "Settings.permissions.users.form.email": "Email",
        "Settings.permissions.users.form.firstname": "Ім'я",
        "Settings.permissions.users.form.lastname": "Прізвище",
        "Settings.permissions.users.form.sso": "Підключитися з SSO",
        "Settings.permissions.users.form.sso.description":
          "Коли ввімкнено (ВКЛ.), користувачі можуть входити через SSO",
        "Settings.permissions.users.listview.header.subtitle":
          "Усі користувачі, які мають доступ до панелі адміністратора Strapi",
        "Settings.permissions.users.tabs.label": "Дозволи вкладок",
        "Settings.profile.form.notify.data.loaded":
          "Дані вашого профілю завантажено",
        "Settings.profile.form.section.experience.clear.select":
          "Очистити вибрану мову інтерфейсу",
        "Settings.profile.form.section.experience.here": "тут",
        "Settings.profile.form.section.experience.interfaceLanguage":
          "Мова інтерфейсу",
        "Settings.profile.form.section.experience.interfaceLanguage.hint":
          "Це відображатиме лише ваш власний інтерфейс вибраною мовою.",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Зміни налаштувань застосовуватимуться лише до вас. Більше інформації доступно {тут}.",
        "Settings.profile.form.section.experience.mode.label":
          "Тема інтерфейсу",
        "Settings.profile.form.section.experience.mode.hint":
          "Відображає ваш інтерфейс у вибраній темі.",
        "Settings.profile.form.section.experience.mode.option-label":
          "{name} тема",
        "Settings.profile.form.section.experience.title": "Інтерфейс",
        "Settings.profile.form.section.helmet.title": "Профіль користувача",
        "Settings.profile.form.section.profile.page.title": "Сторінка профілю",
        "Settings.roles.create.description": "Визначити права, надані ролі",
        "Settings.roles.create.title": "Створити роль",
        "Settings.roles.created": "Роль створена",
        "Settings.roles.edit.title": "Редагувати роль",
        "Settings.roles.form.button.users-with-role":
          "{number, plural, =0 {# користувачів} one {# користувач} other {# користувачів}} з цією роллю",
        "Settings.roles.form.created": "Створено",
        "Settings.roles.form.description": "Назва та опис ролі",
        "Settings.roles.form.permission.property-label": "{label} дозволи",
        "Settings.roles.form.permissions.attributesPermissions":
          "Дозволи полів",
        "Settings.roles.form.permissions.create": "Створити",
        "Settings.roles.form.permissions.delete": "Видалити",
        "Settings.roles.form.permissions.publish": "Опублікувати",
        "Settings.roles.form.permissions.read": "Читати",
        "Settings.roles.form.permissions.update": "Оновлювати",
        "Settings.roles.list.button.add": "Додати нову роль",
        "Settings.roles.list.description": "Список ролей",
        "Settings.roles.title.singular": "роль",
        "Settings.sso.description": "Налаштуйте параметри для функції SSO.",
        "Settings.sso.form.defaultRole.description":
          "Він приєднає нового автентифікованого користувача до вибраної ролі",
        "Settings.sso.form.defaultRole.description-not-allowed":
          "Вам потрібен дозвіл, щоб прочитати ролі адміністратора",
        "Settings.sso.form.defaultRole.label": "Роль за замовчуванням",
        "Settings.sso.form.registration.description":
          "Створити нового користувача для входу в SSO, якщо обліковий запис не існує",
        "Settings.sso.form.registration.label": "Автоматична реєстрація",
        "Settings.sso.title": "Single Sign-On",
        "Settings.webhooks.event.publish-tooltip":
          "Ця подія існує лише для вмісту з увімкненою системою чернетки/публікації",
        "Settings.webhooks.headers.remove": "Видалити рядок заголовка {number}",
        "Settings.webhooks.list.th.actions": "actions",
        "Settings.webhooks.list.th.status": "статус",
        "Settings.webhooks.to.delete":
          "{webhooksToDeleteLength, plural, one  {# asset} other  {# assets}} обрано",
        "Usecase.back-end": "Back-end розробник",
        "Usecase.button.skip": "Пропустити це питання",
        "Usecase.content-creator": "Творець вмісту",
        "Usecase.front-end": "Front-end розробник",
        "Usecase.full-stack": "Full-stack розробник",
        "Usecase.input.work-type": "Якою роботою ти займаєшся?",
        "Usecase.notification.success.project-created":
          "Проект успішно створено",
        "Usecase.other": "Інше",
        "Usecase.title": "Розкажіть нам трохи більше про себе",
        "Users.components.List.empty": "Немає користувачів...",
        "Users.components.List.empty.withFilters":
          "Немає користувачів із застосованими фільтрами...",
        "Users.components.List.empty.withSearch":
          "Немає користувачів, які відповідають пошуковому запиту ({search})...",
        "admin.pages.MarketPlacePage.helmet": "Marketplace - плагіни",
        "admin.pages.MarketPlacePage.offline.title": "Ви не в мережі",
        "admin.pages.MarketPlacePage.offline.subtitle":
          "Щоб отримати доступ до Strapi Market, потрібно бути підключеним до Інтернету.",
        "admin.pages.MarketPlacePage.plugin.copy":
          "Копіювати команду встановлення",
        "admin.pages.MarketPlacePage.plugin.copy.success":
          "Команда встановлення готова до вставки у ваш термінал",
        "admin.pages.MarketPlacePage.plugin.info": "Докладніше",
        "admin.pages.MarketPlacePage.plugin.info.label":
          "Докладніше про {pluginName}",
        "admin.pages.MarketPlacePage.plugin.info.text": "Докладніше",
        "admin.pages.MarketPlacePage.plugin.installed": "Встановлено",
        "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi":
          "Зроблено Strapi",
        "admin.pages.MarketPlacePage.plugin.tooltip.verified":
          "Плагін перевірено Strapi",
        "admin.pages.MarketPlacePage.search.clear": "Очистити пошук плагіна",
        "admin.pages.MarketPlacePage.search.empty":
          'Немає результатів для "{target}"',
        "admin.pages.MarketPlacePage.search.placeholder": "Знайти плагін",
        "admin.pages.MarketPlacePage.submit.plugin.link":
          "Надішліть свій плагін",
        "admin.pages.MarketPlacePage.subtitle": "Отримайте більше від Strapi",
        "admin.pages.MarketPlacePage.missingPlugin.title": "Відсутній плагін?",
        "admin.pages.MarketPlacePage.missingPlugin.description":
          "Скажіть нам, який плагін ви шукаєте, і ми повідомимо наших розробників плагінів, якщо вони шукають натхнення!",
        anErrorOccurred:
          "Ой-йой! Щось пішло не так. Будь ласка, спробуйте ще раз.",
        "app.component.CopyToClipboard.label": "Скопіювати в буфер обміну",
        "app.component.search.label": "Шукати {target}",
        "app.component.table.duplicate": "Дублювати {target}",
        "app.component.table.edit": "Редагувати {target}",
        "app.component.table.select.one-entry": "Виберіть {target}",
        "app.components.ConfirmDialog.title": "Підтвердження",
        "app.components.EmptyStateLayout.content-document": "Вміст не знайдено",
        "app.components.EmptyStateLayout.content-permissions":
          "Ви не маєте дозволів на доступ до цього вмісту",
        "app.components.GuidedTour.CM.create.content":
          "<p>Створюйте весь вміст і керуйте ним тут, у Контент Менеджері.</p><p>Наприклад: Розглянувши приклад веб-сайту блогу, можна написати файл. Статтю, зберігайте та публікуйте її, як вам подобається.</p><p>💡 Коротка порада. Не забудьте натиснути опублікувати у створеному вмісті.</p>",
        "app.components.GuidedTour.CM.create.title": "⚡️ Створити вміст",
        "app.components.GuidedTour.CM.success.content":
          "<p>Чудово, залишився останній крок!</p><b>🚀 Дивіться вміст у дії</b>",
        "app.components.GuidedTour.CM.success.cta.title": "Тестувати API",
        "app.components.GuidedTour.CM.success.title": "Крок 2: виконано ✅",
        "app.components.GuidedTour.CTB.create.content":
          "<p>Типи колекцій допомагають керувати кількома записами, окремі типи підходять для керування лише одним записом.</p> <p>Наприклад: для веб-сайту блогу, Статті будуть типу колекції, тоді як домашня сторінка буде окремою.</p>",
        "app.components.GuidedTour.CTB.create.cta.title":
          "Побудувати тип колекції",
        "app.components.GuidedTour.CTB.create.title":
          "🧠 Створити перший тип колекції",
        "app.components.GuidedTour.CTB.success.content":
          "<p>Будливо!</p><b>⚡️ Чим би ви хотіли поділитися зі світом?</b>",
        "app.components.GuidedTour.CTB.success.title": "Крок 1: виконано ✅",
        "app.components.GuidedTour.apiTokens.create.content":
          "<p>Створіть тут маркер автентифікації та отримайте щойно створений вміст.</p>",
        "app.components.GuidedTour.apiTokens.create.cta.title":
          "Створити API Token",
        "app.components.GuidedTour.apiTokens.create.title":
          "🚀 Дивіться вміст у дії",
        "app.components.GuidedTour.apiTokens.success.content":
          "<p>Перегляньте вміст у дії, зробивши запит HTTP:</p><ul><li><p>На цю URL-адресу: <light>https: //'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>Із заголовком: <light>Авторизація: носій '<' YOUR_API_TOKEN'>'</light></p></li></ul><p>Щоб дізнатися більше про способи взаємодії з вмістом, перегляньте <documentationLink>документацію</documentationLink>.</p>",
        "app.components.GuidedTour.apiTokens.success.cta.title":
          "Повернутися на домашню сторінку",
        "app.components.GuidedTour.apiTokens.success.title":
          "Крок 3: виконано ✅",
        "app.components.GuidedTour.create-content": "Створити вміст",
        "app.components.GuidedTour.home.CM.title":
          "⚡️ Чим би ви хотіли поділитися зі світом?",
        "app.components.GuidedTour.home.CTB.cta.title":
          "Перейти до конструктора типу вмісту",
        "app.components.GuidedTour.home.CTB.title":
          "🧠 Побудуйте структуру вмісту",
        "app.components.GuidedTour.home.apiTokens.cta.title": "Тестувати API",
        "app.components.GuidedTour.skip": "Пропустити огляд",
        "app.components.GuidedTour.title": "3 кроки для початку",
        "app.components.LeftMenu.collapse": "Згорнути панель навігації",
        "app.components.LeftMenu.expand": "Розгорнути панель навігації",
        "app.components.LeftMenu.logout": "Вихід",
        "app.components.ListPluginsPage.deletePlugin.description":
          "Видалення плагіна може зайняти кілька секунд.",
        "app.components.Logout.profile": "Профіль",
        "app.components.MarketplaceBanner":
          "Відкрийте для себе плагіни, створені спільнотою, і багато інших чудових речей, щоб розпочати свій проект, на Strapi Awesome.",
        "app.components.MarketplaceBanner.image.alt": "логотип ракети",
        "app.components.MarketplaceBanner.link": "Перевірте зараз",
        "app.components.Onboarding.help.button": "Довідка",
        "app.components.ToggleCheckbox.off-label": "Ні",
        "app.components.ToggleCheckbox.on-label": "Так",
        "app.components.UpgradePlanModal.button": "Докладніше",
        "app.components.UpgradePlanModal.limit-reached": "Ви досягли ліміту",
        "app.components.UpgradePlanModal.text-power":
          "Відкрийте повну потужність Strapi, оновивши свій план до Enterprise Edition",
        "app.components.UpgradePlanModal.text-strapi":
          "з Strapi, оновивши свій план до",
        "app.components.Users.MagicLink.connect":
          "Скопіюйте та поділіться цим посиланням, щоб надати доступ цьому користувачеві",
        "app.components.Users.MagicLink.connect.sso":
          "Надішліть це посилання користувачеві, перший вхід можна здійснити через SSO",
        "app.components.Users.ModalCreateBody.block-title.details":
          "Дані користувача",
        "app.components.Users.ModalCreateBody.block-title.roles":
          "Ролі користувача",
        "app.components.Users.ModalCreateBody.block-title.roles.description":
          "Користувач може мати одну або кілька ролей",
        "app.components.Users.SortPicker.button-label": "Сортувати за",
        "app.components.Users.SortPicker.sortby.email_asc":
          "Електронна пошта (від А до Я)",
        "app.components.Users.SortPicker.sortby.email_desc":
          "Надіслати електронною поштою (від Я до А)",
        "app.components.Users.SortPicker.sortby.firstname_asc":
          "Ім'я (від А до Я)",
        "app.components.Users.SortPicker.sortby.firstname_desc":
          "Ім'я (від Я до А)",
        "app.components.Users.SortPicker.sortby.lastname_asc":
          "Прізвище (від А до Я)",
        "app.components.Users.SortPicker.sortby.lastname_desc":
          "Прізвище (від Я до А)",
        "app.components.Users.SortPicker.sortby.username_asc":
          "Ім'я користувача (від А до Я)",
        "app.components.Users.SortPicker.sortby.username_desc":
          "Ім'я користувача (від Я до А)",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin":
          "Якщо ви не отримали це посилання, зверніться до свого адміністратора.",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.email":
          "Отримання посилання для відновлення пароля може зайняти кілька хвилин.",
        "app.containers.AuthPage.ForgotPasswordSuccess.title":
          "Електронний лист надіслано",
        "app.containers.Users.EditPage.form.active.label": "Активний",
        "app.containers.Users.EditPage.header.label": "Редагувати {name}",
        "app.containers.Users.EditPage.header.label-loading":
          "Редагувати користувача",
        "app.containers.Users.EditPage.roles-bloc-title": "Надані ролі",
        "app.containers.Users.ModalForm.footer.button-success":
          "Запросити користувача",
        "app.page.not.found":
          "На жаль, ми не можемо знайти сторінку, яку ви шукаєте...",
        "app.utils.add-filter": "Додати фільтр",
        "app.utils.close-label": "Закрити",
        "app.utils.duplicate": "Дублювати",
        "app.utils.edit": "Редагувати",
        "app.utils.errors.file-too-big.message": "Файл завеликий",
        "app.utils.filter-value": "Значення фільтра",
        "app.utils.publish": "Опублікувати",
        "app.utils.select-all": "Вибрати все",
        "app.utils.select-field": "Вибрати поле",
        "app.utils.select-filter": "Вибрати фільтр",
        "app.utils.unpublish": "Скасувати публікацію",
        clearLabel: "Очистити",
        "coming.soon":
          "Цей вміст зараз розробляється і повернеться через кілька тижнів!",
        "components.FilterOptions.FILTER_TYPES.$contains":
          "містить (з урахуванням регістру)",
        "components.FilterOptions.FILTER_TYPES.$endsWith": "закінчується",
        "components.FilterOptions.FILTER_TYPES.$eq": "є",
        "components.FilterOptions.FILTER_TYPES.$gt": "більше ніж",
        "components.FilterOptions.FILTER_TYPES.$gte": "більше або дорівнює",
        "components.FilterOptions.FILTER_TYPES.$lt": "нижче, ніж",
        "components.FilterOptions.FILTER_TYPES.$lte": "менше або дорівнює",
        "components.FilterOptions.FILTER_TYPES.$ne": "не є",
        "components.FilterOptions.FILTER_TYPES.$notContains":
          "не містить (чутливий до регістру)",
        "components.FilterOptions.FILTER_TYPES.$notNull": "не є нульовим",
        "components.FilterOptions.FILTER_TYPES.$null": "не має значення",
        "components.FilterOptions.FILTER_TYPES.$startsWith": "починається з",
        "components.Input.error.contain.lowercase":
          "Пароль повинен містити принаймні один символ нижнього регістру",
        "components.Input.error.contain.number":
          "Пароль повинен містити принаймні одну цифру",
        "components.Input.error.contain.uppercase":
          "Пароль повинен містити принаймні один символ верхнього регістру",
        "components.Input.error.validation.lowercase":
          "Значення має бути рядком у нижньому регістрі",
        "components.NotAllowedInput.text":
          "Немає дозволів на перегляд цього поля",
        "components.TableHeader.sort": "Сортувати за {label}",
        "components.Wysiwyg.ToggleMode.markdown-mode": "Режим розмітки",
        "components.Wysiwyg.ToggleMode.preview-mode":
          "Режим попереднього перегляду",
        "components.pagination.go-to": "Перейти на сторінку {сторінки}",
        "components.pagination.go-to-next": "Перейти до наступної сторінки",
        "components.pagination.go-to-previous": "Перейти на попередню сторінку",
        "components.pagination.remaining-links": "І {number} посилань",
        "components.popUpWarning.button.confirm": "Так, підтвердити",
        "components.popUpWarning.message":
          "Ви впевнені, що хочете видалити це?",
        "content-manager.App.schemas.data-loaded": "Схеми успішно завантажено",
        "content-manager.DynamicTable.relation-loaded": "Відносини завантажено",
        "content-manager.DynamicTable.relation-loading":
          "Відносини завантажуються",
        "content-manager.DynamicTable.relation-more":
          "Це відношення містить більше об'єктів, ніж відображається",
        "content-manager.HeaderLayout.button.label-add-entry":
          "Створити новий запис",
        "content-manager.components.DraggableCard.delete.field":
          "Видалити {item}",
        "content-manager.components.DraggableCard.edit.field":
          "Редагувати {item}",
        "content-manager.components.DraggableCard.move.field":
          "Перемістити {item}",
        "content-manager.components.DynamicTable.row-line":
          "рядок елемента {number}",
        "content-manager.components.DynamicZone.ComponentPicker-label":
          "Виберіть один компонент",
        "content-manager.components.DynamicZone.add-component":
          "Додати компонент до {componentName}",
        "content-manager.components.DynamicZone.delete-label":
          "Видалити {name}",
        "content-manager.components.DynamicZone.error-message":
          "Компонент містить помилку(и)",
        "content-manager.components.DynamicZone.missing-components":
          "Тут {number, plural, =0 {є # відсутні компоненти} one {є # відсутній компонент} other {є # відсутні компоненти}}",
        "content-manager.components.DynamicZone.move-down-label":
          "Перемістити компонент вниз",
        "content-manager.components.DynamicZone.move-up-label":
          "Перемістити компонент вгору",
        "content-manager.components.DynamicZone.required":
          "Обов♥9язковий компонент",
        "content-manager.components.FieldSelect.label": "Додати поле",
        "content-manager.components.LeftMenu.Search.label":
          "Знайти тип контенту",
        "content-manager.components.NotAllowedInput.text":
          "Немає дозволів на перегляд цього поля",
        "content-manager.components.RepeatableComponent.error-message":
          "Компонент(и) містять помилку(и)",
        "content-manager.components.Select.draft-info-title": "Стан: чернетка",
        "content-manager.components.Select.publish-info-title":
          "Стан: опубліковано",
        "content-manager.components.TableDelete.label":
          "{number, plural {# записів} one {# запис} other {# записів}} обрано",
        "content-manager.components.repeatable.reorder.error":
          "Під час зміни порядку поля компонента сталася помилка, спробуйте ще раз",
        "content-manager.containers.Edit.information": "Інформація",
        "content-manager.containers.Edit.information.by": "Ким",
        "content-manager.containers.Edit.information.created": "Створено",
        "content-manager.containers.Edit.information.draftVersion":
          "чорнової версії",
        "content-manager.containers.Edit.information.editing": "Редагування",
        "content-manager.containers.Edit.information.lastUpdate":
          "Останнє оновлення",
        "content-manager.containers.Edit.information.publishedVersion":
          "опублікованої версії",
        "content-manager.containers.EditView.add.new-entry": "Додати запис",
        "content-manager.containers.Edit.delete-entry": "Видалити цей запис",
        "components.DragHandle-label": "Перемістити",
        "content-manager.containers.List.draft": "Чернетка",
        "content-manager.containers.List.published": "Опубліковано",
        "content-manager.containers.ListPage.items":
          "{number, plural, =0 {елементів} one {елемент} other {елементів}}",
        "content-manager.pages.ListView.header-subtitle":
          "{number, plural, =0 {# записів} one {# запис} other {# записів}} знайдено",
        "content-manager.containers.ListPage.table-headers.published_at":
          "Стан",
        "content-manager.containers.SettingPage.editSettings.relation-field.description":
          "Встановити поле, що відображається як у режимі редагування, так і в перегляді списку",
        "content-manager.edit-settings-view.link-to-ctb.components":
          "Редагувати компонент",
        "content-manager.edit-settings-view.link-to-ctb.content-types":
          "Редагувати тип контенту",
        "content-manager.form.Input.sort.order":
          "Порядок сортування за замовчуванням",
        "content-manager.header.name": "Контент",
        "content-manager.link-to-ctb": "Редагувати модель",
        "content-manager.pages.NoContentType.button":
          "Створіть свій перший тип контенту",
        "content-manager.pages.NoContentType.text":
          "У вас ще немає контенту, ми рекомендуємо вам створити свій перший тип контенту.",
        "content-manager.permissions.not-allowed.create":
          "Вам заборонено створювати документ",
        "content-manager.permissions.not-allowed.update":
          "Вам заборонено переглядати цей документ",
        "content-manager.plugin.description.long":
          "Швидкий спосіб переглянути, відредагувати та видалити дані у вашій базі даних.",
        "content-manager.popUpWarning.warning.publish-question":
          "Ви все ще хочете його опублікувати?",
        "content-manager.popUpWarning.warning.unpublish":
          "Скасування публікації цього контенту<br></br>автоматично змінить його на чернетку.",
        "content-manager.popUpWarning.warning.unpublish-question":
          "Ви впевнені, що хочете скасувати публікацію?",
        "content-manager.popUpwarning.warning.has-draft-relations.button-confirm":
          "Так, опублікувати",
        "content-manager.popUpwarning.warning.has-draft-relations.message":
          "<b>{count, plural, =0 { з ваших відносин} one { з ваших відносин} other { з ваших відносин}}</b> ще не опубліковано.<br></br>Це може призвести до непрацездатних посилань і помилок у вашому проєкті..",
        "content-manager.popover.display-relations.label": "Показати відносини",
        "content-manager.success.record.unpublish": "Неопубліковано",
        "content-manager.utils.data-loaded":
          "{number, plural, =1 {запис} other {записів have}} успішно завантажено",
        "content-manager.apiError.This attribute must be unique":
          "Поле {field} повинно бути унікальним",
        "form.button.continue": "Продовжити",
        "app.components.Button.confirm": "Підтвердити",
        "global.back": "Назад",
        "global.change-password": "Змінити пароль",
        "global.content-manager": "Контент-Менеджер",
        "global.continue": "Продовжити",
        "global.delete": "Видалити",
        "global.delete-target": "Видалити {target}",
        "global.description": "Опис",
        "global.details": "Деталі",
        "global.disabled": "Вимкнено",
        "global.enabled": "Увімкнено",
        "global.finish": "Завершити",
        "global.marketplace": "Маркетплейс",
        "global.name": "Ім'я",
        "global.none": "Немає",
        "global.password": "Пароль",
        "global.plugins": "Плагіни",
        "global.profile": "Профіль",
        "global.prompt.unsaved":
          "Ви впевнені, що хочете залишити цю сторінку? Усі ваші зміни буде втрачено",
        "global.reset-password": "Скинути пароль",
        "global.roles": "Ролі",
        "global.save": "Зберегти",
        "global.see-more": "Побачити більше",
        "global.select": "Вибрати",
        "global.select-all-entries": "Вибрати всі записи",
        "global.settings": "Налаштування",
        "global.type": "Тип",
        "global.users": "Користувачі",
        "notification.default.title": "Інформація:",
        "notification.link-copied": "Посилання скопійовано в буфер обміну",
        "notification.permission.not-allowed-read":
          "Вам заборонено переглядати цей документ",
        "notification.success.saved": "Збережено",
        "notification.success.delete": "Цей елемент був видалений",
        "notification.success.title": "Успіх:",
        "notification.version.update.message": "Доступна нова версія Strapi!",
        "notification.warning.title": "Попередження:",
        or: "АБО",
        skipToContent: "Перейти до контенту",
        submit: "Підтвердити",
      },
    },
  },
};
