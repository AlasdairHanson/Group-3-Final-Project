package com.qa.helpqueue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Website_Controller {

	@RequestMapping(value = { "/", "/tickets", "/solutions" })
	public String HomePage() {
		return "index.html";
	}
}
