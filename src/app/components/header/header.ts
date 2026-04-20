import { Component } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";
import { Logo } from "../logo/logo";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  imports: [SearchBar, Logo, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
