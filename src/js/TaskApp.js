//основной класс, при закгрзке страницы - приложения, создает ся экземпляр, и далее вся работа прлоходит с методами этого класса. Стоит добавить несколкьо других модклей =- например, класс для отрисовки самого поля, для сохранения и загрузки задач.загрузкиИ добавить нужн осаму кнопку загрузки

export default class TaskApp {
	constructor (container, state, render) {
		this.container = document.querySelector(container);
		this.state = state;
		this.render = render;

		this.init();
	}

	init	() {

	}

	registerEvent () {

	}

	createTask () {

	}



	async deleteTask() {
		//Как альтернатива асинхронности - отдельно строим модальное кно, а при ужадении - еще и блок кнопок. Записываем ай ди задачи в дата атрибут. По клику - удаляем
		//1. Визуализировать страницу, стилями
// 2. Примерно описать классы, нужные функции
// 3. Перенести рендер в класс
// 4. Вспомогательные классы написать
// 5. основной модуль

// 6. В целом, Такс будет просто создавать объект - айди и текст. 
// Чтобы напрямую не взаимодейтсоввать - методы гет айди и текст

// 7. Рендер - чисто отрисовка страницы, никакой логики

// 8. Отлежимвать ввод текста, нажатие энтера, нажэатие по блокам (закрепленных,Ю сотальынх задачи и кнопок)
// Клик по кругу ставит или снимает гналочку. По крестику - запускает проверку.
// Само модульное окно редендится в классе рендер. Но из основного модуля - зпаускается рпазными методами. У каждого своя логика, запустить, затем спрятать. Или запустить и ортрисовать кнопки

// Сохранять только массив задач, включая закреплены или нет. Можно сохранять айди след задачи, чтобы всякий раз не оставать из массива
	}
}