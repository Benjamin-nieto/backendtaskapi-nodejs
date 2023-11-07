CREATE DATABASE task;
USE task;

INSERT INTO `task`.`celulas` ( `nombre`, `productOwner`, `proyecto`, `createdAt`,`updatedAt`) VALUES ( 'RECAUDOS', 'KERALTY', 'RECAUDOS', current_date(), current_date());

INSERT INTO `task`.`roles` ( `descripcion`, `nombreRol`, `createdAt`,`updatedAt`) VALUES ( 'LIDER TECNICO', 'LIDER_TECNICO', current_date(), current_date());
INSERT INTO `task`.`roles` ( `descripcion`, `nombreRol`, `createdAt`,`updatedAt`) VALUES ( 'DESARROLLADOR', 'DESARROLLADOR', current_date(), current_date());

INSERT INTO `task`.`personas` ( `email`, `nickName`, `nombre`, `numeroIdentificacion`, `idRol`,`createdAt`,`updatedAt`) VALUES ( 'jrjimenez@indracompany.com', 'JUAN', 'JUAN JIMENEZ', '9999999', 2, current_date(), current_date());
INSERT INTO `task`.`personas` ( `email`, `nickName`, `nombre`, `numeroIdentificacion`, `idRol`,`createdAt`,`updatedAt`) VALUES ( 'dsrodriguezl@indracompany.com', 'BENJAMIN', 'BENJAMIN NIETO', '9999999', 2, current_date(), current_date());
INSERT INTO `task`.`personas` ( `email`, `nickName`, `nombre`, `numeroIdentificacion`, `idRol`,`createdAt`,`updatedAt`) VALUES ('ctorresc@indracompany.com', 'DANIELA', 'DANIELA LEON', '9999999', 2, current_date(), current_date());

INSERT INTO `task`.`tareas` ( `estado`, `nombre`, `porcentaje`, `sprint`, `celulaId`, `personaId`,`createdAt`,`updatedAt`) VALUES ( 'INICIADA', 'HU_FCRE_03', 0, 5, 3, 1, current_date(), current_date());

INSERT INTO `task`.`sub_tareas` ( `horas`, `nombre`, `estado`, `tareaId`, `porcentaje`,`createdAt`,`updatedAt`) VALUES ( 9, 'ANALISIS', 'TERMINADO', 4, 100, current_date(), current_date());
INSERT INTO `task`.`sub_tareas` ( `horas`, `nombre`, `estado`, `tareaId`, `porcentaje`,`createdAt`,`updatedAt`) VALUES ( 9, 'DISEÑO TECNICO', 'TERMINADO', 4, 100, current_date(), current_date());
INSERT INTO `task`.`sub_tareas` ( `horas`, `nombre`, `estado`, `tareaId`, `porcentaje`,`createdAt`,`updatedAt`) VALUES ( 18, 'DESARROLLO', 'EN PROCESO', 4, 70, current_date(), current_date());
INSERT INTO `task`.`sub_tareas` (`horas`, `nombre`, `estado`, `tareaId`, `porcentaje`,`createdAt`,`updatedAt`) VALUES ( 9, 'PRUEBAS UNITARIAS', 'PENDIENTE', 4, 1, current_date(), current_date());