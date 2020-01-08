(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SantanderInternationalpos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("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");
	this.shape.setTransform(150,45.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SantanderInternationalpos, new cjs.Rectangle(0,0,300,90.3), null);


(lib.primary_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAAQABgQAHgJQAJgLAPABQAPgBAIAKQAIAHgBAOIgBAMIgqAAQABAJAFADQAFAEAIgBQALAAALgEIgCAOQgKAEgLABQglAAAAglgAANgFQAAgRgMAAQgMAAgCARIAaAAIAAAAg");
	this.shape.setTransform(110.65,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAkIAAhFIAQAAIABAKQAFgMAKAAIAHABQAAAJgBAHIgIgBQgIAAgEAEIAAAzg");
	this.shape_1.setTransform(104.9,18.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_2.setTransform(98.125,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAkIAAgqQAAgOgMAAQgHAAgFAFIAAAFIAAAuIgRAAIAAgqQAAgOgLAAQgHAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNANAAQAPAAAFANQAHgNAOAAQAXAAAAAZIAAAug");
	this.shape_3.setTransform(88.425,18.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAXIAAhCQAIgCAKAAIAAAVIATAAIgCAPIgRAAIAAAeQAAALAIAAQAFAAAFgCIgCAOQgGACgHABQgVAAAAgYg");
	this.shape_4.setTransform(76.975,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAdQgFgGAAgMIAAguIASAAIAAArQAAAOALAAQAGAAAGgGIAAgzIASAAIAABFIgRAAIgBgLQgGANgMAAQgMAAgGgHg");
	this.shape_5.setTransform(70.425,18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_6.setTransform(62.775,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAqQgJgJABgSQgBgkAkAAIAJAAIAAgaQAJgCAJAAIAABiIgRAAIgBgJQgGAKgLABQgMAAgHgJgAgMAPQAAAWAOgBQAHAAAFgEIAAgnIgKAAQgQAAAAAWg");
	this.shape_7.setTransform(51.65,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAkIAAgqQAAgOgMAAQgFAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNAMAAQAMAAAFAHQAGAGAAAMIAAAug");
	this.shape_8.setTransform(44.225,18.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAzIAAhFIARAAIAABFgAgGggQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAADADQADADABAEQgBAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(38.6,16.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAwIAAhgIA3AAQAAAIgBAIIgkAAIAAAZIAiAAQAAAHgCAIIggAAIAAAog");
	this.shape_10.setTransform(33.625,16.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EC0000").ss(1,1,1).p("AolipIRLAAQBHAAAxAyQAyAyAABFQAABGgyAyQgxAyhHAAIxLAAQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAg");
	this.shape_11.setTransform(72,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AolCqQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAIRLAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAg");
	this.shape_12.setTransform(72,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AgUAbQgIgKAAgRQAAgKADgIQADgIAHgFQAHgEAJAAQAKAAAGAEQAGADADAHQADAHAAAKIAAAEIAAAEIgtAAQABAMAFAFQAHAFAJAAQALAAAKgFIgBAFIgBAGQgJAEgKAAQgRAAgJgJgAARgFQAAgJgDgGQgFgFgIAAQgHAAgEAFQgFAGgBAJIAhAAIAAAAg");
	this.shape_13.setTransform(109.5,18.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AgSAjIAAhEIAMAAIAAAKQADgFAEgDQAEgEAGAAIAIABIgBAGIAAAFIgJAAIgJABIgGAFIAAA0g");
	this.shape_14.setTransform(104.025,18.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AgQAgQgHgEgEgJQgEgIAAgLQAAgKAEgIQADgJAIgEQAHgEAJAAQAKAAAHAEQAHAEAEAJQAEAIAAAKQAAALgEAIQgEAJgHAEQgHAEgKAAQgJAAgHgEgAgOgTQgEAHAAAMQAAANAFAHQAEAGAJAAQAJAAAFgGQAFgHAAgNQAAgMgFgHQgEgGgKAAQgJAAgFAGg");
	this.shape_15.setTransform(97.425,18.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AAlAjIAAgqQAAgJgEgEQgDgEgIgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgJgEgEQgDgEgIgBQgFABgEACQgEACgDADIAAA0IgMAAIAAhEIALAAIABALQADgHAFgCQAFgEAIAAQAHAAAGAEQAEADACAGQAEgGAFgDQAGgEAIAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_16.setTransform(87.825,18.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AgLApQgFgFAAgMIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAAHADADQABADAGAAIAFgBIAGgCIgCAKQgGADgGAAQgIAAgGgFg");
	this.shape_17.setTransform(76.775,17.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQAAAJADAEQADAFAIAAQAEAAAFgCQADgDADgDIAAg1IANAAIAABFIgMAAIAAgKQgEAFgFAEQgFADgGAAQgLAAgGgHg");
	this.shape_18.setTransform(70.3,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AgQAgQgHgEgEgJQgEgIAAgLQAAgKAEgIQADgJAIgEQAHgEAJAAQAKAAAHAEQAHAEAEAJQAEAIAAAKQAAALgEAIQgEAJgHAEQgHAEgKAAQgJAAgHgEgAgOgTQgEAHAAAMQAAANAFAHQAEAGAJAAQAJAAAFgGQAFgHAAgNQAAgMgFgHQgEgGgKAAQgJAAgFAGg");
	this.shape_19.setTransform(62.875,18.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AgPAuQgGgEgEgIQgDgIAAgMQAAgQAIgKQAIgKARAAIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgDAGgEACQgFADgFAAQgJAAgGgEgAgLgFQgFAHAAAMQAAANAFAHQAFAGAIAAQAJAAAGgGIAAgsQgFgCgHAAQgLABgFAGg");
	this.shape_20.setTransform(52.225,16.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("AAPAjIAAgqQAAgJgDgEQgDgEgIgBQgEABgEACQgFACgDADIAAA0IgMAAIAAhEIALAAIABALQAEgHAFgCQAFgEAGAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_21.setTransform(44.975,18.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(39.5,16.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_23.setTransform(34.825,16.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAbQgIgKAAgRQAAgKADgIQADgIAHgFQAHgEAJAAQAKAAAGAEQAGADADAHQADAHAAAKIAAAEIAAAEIgtAAQABAMAFAFQAHAFAJAAQALAAAKgFIgBAFIgBAGQgJAEgKAAQgRAAgJgJgAARgFQAAgJgDgGQgFgFgIAAQgHAAgEAFQgFAGgBAJIAhAAIAAAAg");
	this.shape_24.setTransform(109.5,18.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAjIAAhEIAMAAIAAAKQADgFAEgDQAEgEAGAAIAIABIgBAGIAAAFIgJAAIgJABIgGAFIAAA0g");
	this.shape_25.setTransform(104.025,18.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAgQgHgEgEgJQgEgIAAgLQAAgKAEgIQADgJAIgEQAHgEAJAAQAKAAAHAEQAHAEAEAJQAEAIAAAKQAAALgEAIQgEAJgHAEQgHAEgKAAQgJAAgHgEgAgOgTQgEAHAAAMQAAANAFAHQAEAGAJAAQAJAAAFgGQAFgHAAgNQAAgMgFgHQgEgGgKAAQgJAAgFAGg");
	this.shape_26.setTransform(97.425,18.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlAjIAAgqQAAgJgEgEQgDgEgIgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgJgEgEQgDgEgIgBQgFABgEACQgEACgDADIAAA0IgMAAIAAhEIALAAIABALQADgHAFgCQAFgEAIAAQAHAAAGAEQAEADACAGQAEgGAFgDQAGgEAIAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_27.setTransform(87.825,18.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLApQgFgFAAgMIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAAHADADQABADAGAAIAFgBIAGgCIgCAKQgGADgGAAQgIAAgGgFg");
	this.shape_28.setTransform(76.775,17.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQAAAJADAEQADAFAIAAQAEAAAFgCQADgDADgDIAAg1IANAAIAABFIgMAAIAAgKQgEAFgFAEQgFADgGAAQgLAAgGgHg");
	this.shape_29.setTransform(70.3,18.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAgQgHgEgEgJQgEgIAAgLQAAgKAEgIQADgJAIgEQAHgEAJAAQAKAAAHAEQAHAEAEAJQAEAIAAAKQAAALgEAIQgEAJgHAEQgHAEgKAAQgJAAgHgEgAgOgTQgEAHAAAMQAAANAFAHQAEAGAJAAQAJAAAFgGQAFgHAAgNQAAgMgFgHQgEgGgKAAQgJAAgFAGg");
	this.shape_30.setTransform(62.875,18.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAuQgGgEgEgIQgDgIAAgMQAAgQAIgKQAIgKARAAIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgDAGgEACQgFADgFAAQgJAAgGgEgAgLgFQgFAHAAAMQAAANAFAHQAFAGAIAAQAJAAAGgGIAAgsQgFgCgHAAQgLABgFAGg");
	this.shape_31.setTransform(52.225,16.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAjIAAgqQAAgJgDgEQgDgEgIgBQgEABgEACQgFACgDADIAAA0IgMAAIAAhEIALAAIABALQAEgHAFgCQAFgEAGAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_32.setTransform(44.975,18.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(39.5,16.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_34.setTransform(34.825,16.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAjIgKgDQAAgGACgEIAJADIAKABQAGAAAEgCQAEgCAAgFQAAgEgCgDQgDgCgGgCIgGgCQgIgDgFgEQgFgFAAgIQAAgJAHgFQAGgFALAAQAMAAAJADIgCAKIgJgDIgJAAQgGAAgDACQgEACAAAFQAAAEADACQADADAFACIAGACQAKADAEAEQAEAEAAAIQAAAGgDAFQgDAEgGADQgGACgHAAIgMgBg");
	this.shape_35.setTransform(101.375,18.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIAuQgEgFAAgKIAAhPQAFgBAHAAIAABPQAAAGABABQACADAEAAQAEAAACgCIgBAKQgEACgFAAQgHAAgEgEg");
	this.shape_36.setTransform(96.725,16.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgFgjQgCgDAAgDQAAgEACgCQADgCACAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_37.setTransform(92.75,16.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAiQgFgCgCgFQgDgFAAgHQAAgHADgGQAEgEAJgDQAIgDAOgBIADAAIAAgDQAAgHgDgDQgEgDgIAAIgLABIgLAEIABgKQAKgFANAAQANAAAGAFQAGAGAAAMIAAAvIgLAAIAAgKQgDAFgFADQgGADgGAAQgHAAgFgCgAgEACQgGACgCADQgCADAAAFQAAAFADADQADAEAGAAQAFAAAFgDQAEgCADgEIAAgSIgCAAQgMAAgFACg");
	this.shape_38.setTransform(87.425,18.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgKAEgIQADgIAHgFQAHgEAKAAQAJAAAGAEQAGADAEAHQADAHAAAKIAAAEIgBAEIgtAAQABAMAGAFQAFAFAKAAQAMAAAKgFIgBAFIgBAGQgKAEgLAAQgQAAgJgJgAASgFQAAgJgFgGQgEgFgIAAQgHAAgFAFQgEAGgBAJIAiAAIAAAAg");
	this.shape_39.setTransform(75.8,18.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIAuQgEgFAAgKIAAhPQAFgBAHAAIAABPQAAAGABABQACADAEAAQAEAAACgCIgBAKQgEACgFAAQgHAAgEgEg");
	this.shape_40.setTransform(60.275,16.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAuQgEgFAAgKIAAhPQAFgBAHAAIAABPQAAAGABABQACADAEAAQAEAAACgCQAAAFgBAFQgEACgFAAQgHAAgEgEg");
	this.shape_41.setTransform(56.375,16.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIALAAIAAArQABAJADAEQADAFAIAAQAEAAAFgCQADgDAEgDIAAg1IAMAAIAABFIgLAAIgBgKQgEAFgFAEQgFADgGAAQgLAAgGgHg");
	this.shape_42.setTransform(50.25,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:34.825}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:52.225}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:76.775}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:43.475}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_31,p:{x:68.375}},{t:this.shape_39},{t:this.shape_28,p:{x:82.025}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,146,36);


(lib.mc_level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgEAJIgEgEIgBgFQAAgDADgDQADgDADgBQAFABADADQADADAAADQAAAEgDADQgDAEgFAAQgCgBgCgBg");
	this.shape.setTransform(470,19.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgTA4QgHgEgEgLQgEgJAAgPQAAgUAKgLQAKgNAUAAIAPACIAAggQAGgDAIAAIAAB3IgNAAIgBgLQgEAHgFADQgGADgHAAQgKAAgIgFgAgNgFQgHAHAAAPQAAAQAGAIQAGAIAKAAQALAAAIgJIAAg0QgHgCgIAAQgNgBgGAKg");
	this.shape_1.setTransform(463.075,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAEgKAJgFQAIgGALAAQAMAAAIAFQAHAEAEAJQAEAIAAAMIAAAFIgBAFIg2AAQAAAPAIAGQAGAGANAAQANAAAMgHIgBAHIgBAHQgMAFgMAAQgVAAgLgLgAAVgGQAAgLgFgHQgFgHgKAAQgJAAgFAHQgGAGAAAMIAoAAIAAAAg");
	this.shape_2.setTransform(454.45,16.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgNAxQgHgGABgOIAAhSQAFgCAJAAIAAAZIAZAAIgBANIgYAAIAAAtQAAAIADAEQACADAIAAIAGgBIAGgCIgCANQgHADgHAAQgLAAgGgHg");
	this.shape_3.setTransform(447.7,14.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgNAxQgGgGAAgOIAAhSQAFgCAJAAIAAAZIAZAAIgBANIgYAAIAAAtQAAAIADAEQACADAIAAIAGgBIAGgCIgCANQgGADgIAAQgLAAgGgHg");
	this.shape_4.setTransform(441.95,14.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgGA9IAAhUIAOAAIAABUgAgGgrQgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQACACABAFQgBAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_5.setTransform(436.7,14.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAtArIAAg0QAAgKgEgGQgFgFgJAAQgKAAgKAJIABAIIAAA4IgPAAIAAgzQAAgLgDgGQgFgFgKAAQgFAAgGADQgEACgEAEIAABAIgPAAIAAhTIAOAAIAAANQAFgIAGgDQAHgEAIAAQAKAAAGAEQAFAEADAHQAFgIAHgDQAFgEALAAQAMAAAIAIQAGAHABAOIAAA4g");
	this.shape_6.setTransform(427.55,15.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgWArIAAhTIAOAAIAAAMQAEgHAEgDQAGgEAHAAIAKABIgBAHIgBAGIgKgBQgFAAgGACQgEACgDAFIAAA/g");
	this.shape_7.setTransform(417.925,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAEgKAJgFQAIgGALAAQAMAAAIAFQAHAEAEAJQAEAIAAAMIAAAFIgBAFIg2AAQAAAPAIAGQAGAGANAAQANAAAMgHIgBAHIgBAHQgMAFgMAAQgVAAgLgLgAAVgGQAAgLgFgHQgFgHgKAAQgJAAgFAHQgFAGgBAMIAoAAIAAAAg");
	this.shape_8.setTransform(410,16.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgiA9IAAh3IANAAIABALQAEgGAFgEQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAOQAAAVgKALQgKAMgUAAIgPgBIAAAjgAgUgoIAAA1QAHACAIAAQANAAAGgIQAHgIAAgPQAAgQgGgIQgGgIgKAAQgLAAgIAIg");
	this.shape_9.setTransform(401.475,17.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgYAhQgLgMAAgVQAAgMAEgKQAEgKAJgFQAIgGALAAQAMAAAIAFQAHAEAEAJQAEAIAAAMIAAAFIgBAFIg2AAQABAPAGAGQAIAGAMAAQANAAAMgHIgBAHIgBAHQgMAFgMAAQgVAAgKgLgAAVgGQAAgLgFgHQgFgHgKAAQgIAAgGAHQgGAGAAAMIAoAAIAAAAg");
	this.shape_10.setTransform(388.65,16.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgWArIAAhTIAOAAIAAAMQAEgHAEgDQAGgEAHAAIAKABIgBAHIgBAGIgKgBQgFAAgGACQgEACgDAFIAAA/g");
	this.shape_11.setTransform(382.025,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgaAkQgGgIAAgOIAAg4IAOAAIAAA0QAAALAFAFQADAFAKAAQAFAAAGgCQAFgDADgEIAAhAIAOAAIAABTIgNAAIgBgNQgEAIgHAEQgFADgIAAQgNAAgIgHg");
	this.shape_12.setTransform(373.85,16.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgRArQgHgCgFgCQAAgHACgGQAGADAGACIAMABQAIAAAFgDQAEgDABgFQAAgGgDgCQgEgDgHgDIgHgCQgKgEgGgEQgGgGAAgKQAAgMAIgGQAIgGANAAQAOAAALAEIgCAMIgKgDIgLgBQgIAAgFADQgEADAAAFQAAAFAEADQADADAHADIAHACQAMAEAFAFQAGAFAAAJQAAAIgEAFQgEAGgHADQgIADgJAAQgHAAgIgBg");
	this.shape_13.setTransform(365.65,16.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgUAnQgIgFgFgKQgFgKAAgOQAAgNAFgJQAFgKAIgGQAJgFALAAQANAAAIAFQAJAGAEAKQAEAJABANQgBAOgEAKQgEAKgJAFQgJAFgMAAQgLAAgJgFgAgQgXQgHAJAAAOQAAAQAHAIQAFAIALAAQALAAAHgIQAFgIAAgQQAAgOgFgJQgGgIgMAAQgLAAgFAIg");
	this.shape_14.setTransform(357.4,16.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgKA4QgFgHAAgLIAAhfQAGgDAIAAIAABhQAAAGACADQACACAFABQAFgBADgBIgCAMQgEACgGAAQgJAAgFgFg");
	this.shape_15.setTransform(351.025,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgKAnQgJgFgFgJQgFgKAAgPQAAgOAFgKQAGgKAJgEQAJgFALAAQALAAAIADIgBAGIgBAGQgHgDgJAAQgMAAgHAJQgHAIAAAOQAAAKAEAHQADAIAGADQAFAEAIAAIAJgBIAJgDIgCAMQgDACgFABIgKABQgLAAgJgFg");
	this.shape_16.setTransform(344.525,16.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgNAxQgHgGABgOIAAhSQAFgCAJAAIAAAZIAZAAIgBANIgYAAIAAAtQAAAIADAEQACADAIAAIAGgBIAGgCIgBANQgIADgHAAQgLAAgGgHg");
	this.shape_17.setTransform(334.75,14.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AATArIAAgzQAAgLgFgGQgDgFgKAAQgFAAgFADQgGACgDAEIAABAIgPAAIAAhTIAOAAIABANQAEgIAHgDQAFgEAIAAQANAAAIAIQAGAHABAOIAAA4g");
	this.shape_18.setTransform(327,15.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgaAkQgGgIgBgOIAAg4IAPAAIAAA0QAAALAEAFQAFAFAJAAQAFAAAFgCQAFgDAEgEIAAhAIAPAAIAABTIgOAAIgBgNQgEAIgGAEQgGADgIAAQgNAAgIgHg");
	this.shape_19.setTransform(317.75,16.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgUAnQgIgFgFgKQgEgKgBgOQABgNAEgJQAFgKAIgGQAJgFALAAQANAAAIAFQAIAGAFAKQAEAJABANQgBAOgEAKQgFAKgIAFQgJAFgMAAQgLAAgJgFgAgQgXQgHAJABAOQgBAQAHAIQAFAIALAAQAMAAAFgIQAHgIgBgQQABgOgHgJQgFgIgMAAQgLAAgFAIg");
	this.shape_20.setTransform(308.7,16.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgKAnQgJgFgFgJQgFgKAAgPQAAgOAFgKQAGgKAJgEQAJgFALAAQALAAAIADIgBAGIgBAGQgHgDgJAAQgMAAgHAJQgHAIAAAOQAAAKAEAHQADAIAGADQAFAEAIAAIAJgBIAJgDIgCAMQgDACgFABIgKABQgLAAgJgFg");
	this.shape_21.setTransform(300.525,16.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgKAnQgJgFgFgJQgFgKAAgPQAAgOAFgKQAGgKAJgEQAJgFALAAQALAAAIADIgBAGIgBAGQgHgDgJAAQgMAAgHAJQgHAIAAAOQAAAKAEAHQADAIAGADQAFAEAIAAIAJgBIAJgDIgCAMQgDACgFABIgKABQgLAAgJgFg");
	this.shape_22.setTransform(293.225,16.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgTApQgGgDgEgFQgDgGAAgIQAAgKAEgGQAFgFAKgEQALgEARgBIAEAAIAAgEQAAgIgFgEQgEgEgJAAQgIAAgHACQgHABgGADIABgMQAMgGAQAAQAQAAAIAHQAHAHAAAOIAAA5IgNAAIgBgLQgDAGgHAEQgGADgIAAQgIAAgGgDgAAQAAQgOAAgHACQgHACgDAEQgDAEAAAGQAAAHAEAEQAEAEAIAAQAFAAAGgDQAGgDAEgFIAAgXg");
	this.shape_23.setTransform(285.125,16.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgWArIAAhTIAOAAIAAAMQAEgHAEgDQAGgEAHAAIAKABIgBAHIgBAGIgKgBQgFAAgGACQgEACgDAFIAAA/g");
	this.shape_24.setTransform(275.075,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgTAnQgKgFgEgKQgEgKAAgOQAAgNAEgJQAFgKAIgGQAJgFALAAQAMAAAJAFQAJAGAEAKQAFAJgBANQABAOgFAKQgEAKgJAFQgJAFgMAAQgLAAgIgFgAgRgXQgFAJAAAOQAAAQAFAIQAHAIAKAAQAMAAAFgIQAHgIAAgQQAAgOgHgJQgFgIgMAAQgKAAgHAIg");
	this.shape_25.setTransform(267,16.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgRArQgGgCgFgCQAAgHABgGQAFADAHACIAMABQAIAAAFgDQAFgDAAgFQAAgGgEgCQgDgDgHgDIgHgCQgKgEgGgEQgGgGAAgKQAAgMAIgGQAIgGANAAQAOAAAMAEIgDAMIgKgDIgMgBQgHAAgEADQgFADAAAFQAAAFAEADQADADAHADIAIACQALAEAFAFQAGAFgBAJQABAIgEAFQgEAGgHADQgIADgJAAQgHAAgIgBg");
	this.shape_26.setTransform(255.2,16.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgKA4QgFgHAAgLIAAhfQAGgDAIAAIAABhQAAAGACADQACACAFABQAFgBADgBIgCAMQgEACgGAAQgJAAgFgFg");
	this.shape_27.setTransform(249.575,14.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgTApQgGgDgEgFQgDgGAAgIQAAgKAEgGQAFgFAKgEQALgEARgBIAEAAIAAgEQAAgIgFgEQgEgEgJAAQgIAAgHACQgHABgGADIABgMQAMgGAQAAQAQAAAIAHQAHAHAAAOIAAA5IgNAAIgBgLQgDAGgHAEQgGADgIAAQgIAAgGgDgAAQAAQgOAAgHACQgHACgDAEQgDAEAAAGQAAAHAEAEQAEAEAIAAQAFAAAGgDQAGgDAEgFIAAgXg");
	this.shape_28.setTransform(242.275,16.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAWAqIgWg/IgVA/IgMAAIgehTIAQAAIAVBDIAVhDIAMAAIAXBEIAUhEIAOAAIgdBTg");
	this.shape_29.setTransform(231.65,16.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgTApQgGgDgEgFQgDgGAAgIQAAgKAEgGQAFgFAKgEQALgEARgBIAEAAIAAgEQAAgIgFgEQgEgEgJAAQgIAAgHACQgHABgGADIABgMQAMgGAQAAQAQAAAIAHQAHAHAAAOIAAA5IgNAAIgBgLQgDAGgHAEQgGADgIAAQgIAAgGgDgAAQAAQgOAAgHACQgHACgDAEQgDAEAAAGQAAAHAEAEQAEAEAIAAQAFAAAGgDQAGgDAEgFIAAgXg");
	this.shape_30.setTransform(220.575,16.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgWArIAAhTIAOAAIAAAMQAEgHAEgDQAGgEAHAAIAKABIgBAHIgBAGIgKgBQgFAAgGACQgEACgDAFIAAA/g");
	this.shape_31.setTransform(214.175,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgTA4QgHgEgEgLQgEgJAAgPQAAgUAKgLQAKgNAUAAIAPACIAAggQAGgDAIAAIAAB3IgNAAIgBgLQgEAHgFADQgGADgHAAQgKAAgIgFgAgNgFQgHAHAAAPQAAAQAGAIQAGAIAKAAQALAAAIgJIAAg0QgHgCgIAAQgNgBgGAKg");
	this.shape_32.setTransform(205.825,14.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AASA8IAAg1QAAgKgDgFQgFgGgKABQgEAAgFACQgFADgEAEIAABAIgPAAIAAh0QAGgDAJAAIAAAwQAFgHAFgDQAGgEAIgBQANABAIAHQAGAIABANIAAA5g");
	this.shape_33.setTransform(197.05,14.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgNAxQgGgGgBgOIAAhSQAHgCAIAAIAAAZIAaAAIgCANIgYAAIAAAtQAAAIADAEQADADAGAAIAHgBIAGgCIgBANQgIADgHAAQgKAAgHgHg");
	this.shape_34.setTransform(189.9,14.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgGA9IAAhUIANAAIAABUgAgGgrQgDgDAAgEQAAgFADgCQADgCADgBQAEABADACQADACgBAFQABAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_35.setTransform(184.65,14.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAVAqIgUg/IgWA/IgMAAIgehTIAPAAIAWBDIAVhDIAMAAIAXBEIAThEIAPAAIgcBTg");
	this.shape_36.setTransform(176.05,16.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgJAVIADgTIACgUIAGgCIAIAAQgBAOgCAJQgDAKgEAIg");
	this.shape_37.setTransform(163.5,20.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgRArQgHgCgFgCQAAgHACgGQAGADAGACIAMABQAIAAAFgDQAEgDABgFQAAgGgDgCQgEgDgHgDIgHgCQgKgEgGgEQgGgGAAgKQAAgMAIgGQAIgGAOAAQAOAAAKAEIgCAMIgKgDIgLgBQgIAAgFADQgEADAAAFQAAAFADADQAEADAHADIAHACQAMAEAFAFQAGAFAAAJQAAAIgEAFQgEAGgHADQgIADgJAAQgHAAgIgBg");
	this.shape_38.setTransform(157.85,16.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgNAxQgHgGABgOIAAhSQAFgCAJAAIAAAZIAZAAIgBANIgYAAIAAAtQAAAIADAEQACADAIAAIAGgBIAGgCIgCANQgHADgHAAQgLAAgGgHg");
	this.shape_39.setTransform(151.6,14.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgGA9IAAhUIANAAIAABUgAgFgrQgDgDAAgEQAAgFADgCQACgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgCgDg");
	this.shape_40.setTransform(146.35,14.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgQArQgIgCgEgCQAAgHACgGQAEADAHACIAMABQAIAAAFgDQAFgDgBgFQAAgGgDgCQgCgDgIgDIgHgCQgKgEgGgEQgGgGAAgKQAAgMAIgGQAIgGANAAQAOAAAMAEIgDAMIgLgDIgLgBQgHAAgEADQgFADAAAFQAAAFAEADQADADAHADIAIACQALAEAFAFQAFAFAAAJQAAAIgDAFQgEAGgIADQgHADgJAAQgIAAgGgBg");
	this.shape_41.setTransform(140.7,16.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgTAnQgKgFgEgKQgEgKAAgOQAAgNAEgJQAFgKAIgGQAJgFALAAQAMAAAJAFQAJAGAEAKQAFAJgBANQABAOgFAKQgEAKgJAFQgJAFgMAAQgLAAgIgFgAgRgXQgFAJAAAOQAAAQAFAIQAHAIAKAAQAMAAAFgIQAHgIAAgQQAAgOgHgJQgFgIgMAAQgKAAgHAIg");
	this.shape_42.setTransform(132.45,16.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgiA9IAAh3IANAAIABALQAEgGAFgEQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAOQAAAVgKALQgKAMgUAAIgPgBIAAAjgAgUgoIAAA1QAHACAIAAQANAAAGgIQAHgIAAgPQAAgQgGgIQgGgIgKAAQgLAAgIAIg");
	this.shape_43.setTransform(123.675,17.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgYAhQgLgMAAgVQAAgMAEgKQAEgKAJgFQAIgGAMAAQALAAAIAFQAIAEADAJQAEAIAAAMIAAAFIgBAFIg3AAQACAPAGAGQAIAGAMAAQANAAAMgHIgBAHIgBAHQgMAFgNAAQgUAAgKgLgAAVgGQAAgLgFgHQgFgHgKAAQgIAAgGAHQgFAGgCAMIApAAIAAAAg");
	this.shape_44.setTransform(114.5,16.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgTA4QgHgEgEgLQgEgJAAgPQAAgUAKgLQAKgNAUAAIAPACIAAggQAGgDAIAAIAAB3IgNAAIgBgLQgEAHgFADQgGADgHAAQgKAAgIgFgAgNgFQgHAHAAAPQAAAQAGAIQAGAIAKAAQALAAAIgJIAAg0QgHgCgIAAQgNgBgGAKg");
	this.shape_45.setTransform(105.475,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgKA4QgFgHAAgLIAAhfQAGgDAIAAIAABhQAAAGACADQACACAFABQAFgBADgBIgCAMQgEACgGAAQgJAAgFgFg");
	this.shape_46.setTransform(95.675,14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgTApQgGgDgEgFQgDgGAAgIQAAgKAEgGQAFgFAKgEQALgEARgBIAEAAIAAgEQAAgIgFgEQgEgEgJAAQgIAAgHACQgHABgGADIABgMQAMgGAQAAQAQAAAIAHQAHAHAAAOIAAA5IgNAAIgBgLQgDAGgHAEQgGADgIAAQgIAAgGgDgAAQAAQgOAAgHACQgHACgDAEQgDAEAAAGQAAAHAEAEQAEAEAIAAQAFAAAGgDQAGgDAEgFIAAgXg");
	this.shape_47.setTransform(88.375,16.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AATArIAAgzQAAgLgFgGQgDgFgKAAQgFAAgFADQgGACgDAEIAABAIgOAAIAAhTIANAAIABANQAEgIAHgDQAFgEAIAAQANAAAIAIQAGAHAAAOIAAA4g");
	this.shape_48.setTransform(79.85,15.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgTAnQgKgFgEgKQgFgKABgOQgBgNAFgJQAFgKAIgGQAJgFALAAQAMAAAJAFQAJAGAEAKQAFAJgBANQABAOgFAKQgEAKgJAFQgJAFgMAAQgLAAgIgFgAgRgXQgFAJgBAOQABAQAFAIQAHAIAKAAQALAAAGgIQAGgIABgQQgBgOgGgJQgFgIgMAAQgKAAgHAIg");
	this.shape_49.setTransform(70.7,16.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgGA9IAAhUIAOAAIAABUgAgGgrQgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQACACABAFQgBAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_50.setTransform(64.2,14.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgNAxQgHgGABgOIAAhSQAFgCAJAAIAAAZIAZAAIgBANIgYAAIAAAtQAAAIADAEQACADAIAAIAGgBIAGgCIgBANQgIADgHAAQgLAAgGgHg");
	this.shape_51.setTransform(59.7,14.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgGA9IAAhUIANAAIAABUgAgFgrQgDgDgBgEQABgFADgCQACgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgCgDg");
	this.shape_52.setTransform(54.45,14.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgTA4QgHgEgEgLQgEgJAAgPQAAgUAKgLQAKgNAUAAIAPACIAAggQAGgDAIAAIAAB3IgNAAIgBgLQgEAHgFADQgGADgHAAQgKAAgIgFgAgNgFQgHAHAAAPQAAAQAGAIQAGAIAKAAQALAAAIgJIAAg0QgHgCgIAAQgNgBgGAKg");
	this.shape_53.setTransform(47.675,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgTA4QgHgEgEgLQgEgJAAgPQAAgUAKgLQAKgNAUAAIAPACIAAggQAGgDAIAAIAAB3IgNAAIgBgLQgEAHgFADQgGADgHAAQgKAAgIgFgAgNgFQgHAHAAAPQAAAQAGAIQAGAIAKAAQALAAAIgJIAAg0QgHgCgIAAQgNgBgGAKg");
	this.shape_54.setTransform(38.625,14.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgTApQgGgDgEgFQgDgGAAgIQAAgKAEgGQAFgFAKgEQALgEARgBIAEAAIAAgEQAAgIgFgEQgEgEgJAAQgIAAgHACQgHABgGADIABgMQAMgGAQAAQAQAAAIAHQAHAHAAAOIAAA5IgNAAIgBgLQgDAGgHAEQgGADgIAAQgIAAgGgDgAAQAAQgOAAgHACQgHACgDAEQgDAEAAAGQAAAHAEAEQAEAEAIAAQAFAAAGgDQAGgDAEgFIAAgXg");
	this.shape_55.setTransform(29.875,16.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgTAnQgKgFgEgKQgEgKAAgOQAAgNAEgJQAFgKAIgGQAJgFALAAQAMAAAJAFQAJAGAEAKQAFAJgBANQABAOgFAKQgEAKgJAFQgJAFgMAAQgLAAgIgFgAgRgXQgFAJAAAOQAAAQAFAIQAHAIAKAAQAMAAAFgIQAHgIAAgQQAAgOgHgJQgFgIgMAAQgKAAgHAIg");
	this.shape_56.setTransform(17.7,16.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AAdA8IgshKQgHgKgFgLIAAArIAAA0IgOAAIAAh0IAHgCIAHgBIArBGIANAXIgBgxIAAgpIAHgCIAHgBIAAB3g");
	this.shape_57.setTransform(7.525,14.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level3, new cjs.Rectangle(-0.1,-1,474.5,28.6), null);


(lib.mc_level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAPQgEgCgDgEQgCgEAAgFQAAgGAFgFQAFgFAGAAQAIAAAEAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgDAAgEgCg");
	this.shape.setTransform(202.325,64.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBRQgLgLAAgVIAAiJQAKgDAOAAIAAAqIArAAIgCAUIgpAAIAABLQAAAOAGAFQAEAGAMAAIAKgBIAKgEIgDAVQgLAFgMAAQgSAAgLgLg");
	this.shape_1.setTransform(194.625,57.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRBAQgOgIgJgQQgIgQAAgYQAAgYAJgQQAIgQAOgIQAPgIAUAAQARAAAOAGIAAAKIgDAJQgMgFgPAAQgTAAgLAOQgMAOAAAYQAAARAFALQAFAMAKAGQAJAHANAAQAHAAAIgCQAJgCAGgEIgEAVIgMAFQgJACgIAAQgSAAgPgJg");
	this.shape_2.setTransform(183.3,59.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggBEQgLgFgFgKQgGgJAAgNQAAgQAHgLQAIgJARgGQASgGAcgCIAGgBIAAgFQAAgPgHgGQgHgGgPAAQgOAAgLACQgLADgKAGQAAgLABgKQAUgKAcAAQAaAAAMAMQANALAAAXIAABfIgXAAIgBgTQgGALgKAGQgKAGgOAAQgNAAgKgFgAgJADQgMAEgFAGQgEAHAAAJQAAALAGAHQAHAGAMAAQAKAAAKgFQAKgEAFgIIAAgmIgFAAQgWACgMADg");
	this.shape_3.setTransform(169.975,59.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBHIAAiKIAWAAIACAUQAFgLAIgGQAJgGALAAQAJAAAHACIAAALIgCAKQgIgCgJAAQgJABgIADQgIADgFAIIAABpg");
	this.shape_4.setTransform(159.35,59.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBRQgLgLAAgVIAAiJQAKgDAOAAIAAAqIArAAIgCAUIgpAAIAABLQAAAOAGAFQAEAGAMAAIAKgBIAKgEIgDAVQgLAFgMAAQgSAAgLgLg");
	this.shape_5.setTransform(149.325,57.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfBHIAAhWQAAgSgHgIQgHgKgPABQgKAAgIAEQgIAFgHAGIAABqIgXAAIAAiKIAWAAIABAVQAIgMAKgGQAKgGAOAAQAWAAALAMQAMANAAAXIAABdg");
	this.shape_6.setTransform(136.55,59.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghBAQgPgJgHgQQgIgRAAgWQABgWAGgQQAIgQAPgJQAOgJATAAQAUAAAOAJQAPAJAHAQQAIAQAAAWQgBAWgHARQgIAQgOAJQgOAJgUAAQgTAAgOgJgAgcgmQgKANAAAZQAAAZAKAOQAJAOATAAQATAAAKgOQAJgOABgZQgBgZgJgNQgKgOgTAAQgTAAgJAOg");
	this.shape_7.setTransform(121.5,59.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBZQgUgNgKgXQgKgXAAgeQAAgeAKgWQALgXATgMQAUgNAbAAQAbAAARAKQgBALgDAKQgHgFgLgCQgKgCgLAAQgUAAgNAJQgOAJgIASQgHASAAAZQAAAZAIARQAHASAPAJQANAJAUAAQALAAALgCQALgDAJgEIgCAMIgCANQgUAGgUAAQgbAAgUgMg");
	this.shape_8.setTransform(106.475,56.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWBRQgLgLAAgVIAAiJQAKgDAOAAIAAAqIArAAIgCAUIgpAAIAABLQAAAOAGAFQAEAGAMAAIAKgBIAKgEIgDAVQgLAFgMAAQgSAAgLgLg");
	this.shape_9.setTransform(88.375,57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBkIAAiKIAXAAIAACKgAgKhIQgEgEAAgHQAAgHAEgEQAFgFAFAAQAHAAAEAFQAFAEgBAHQABAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_10.setTransform(79.75,56.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBGQgLgCgJgFQABgLADgJQAIAFALACQAKADAKAAQAOAAAHgFQAIgFAAgKQAAgIgFgFQgFgEgNgFIgLgEQgRgFgKgJQgKgKAAgQQAAgSANgLQANgKAYAAQAWAAASAGIgDAUIgSgFIgSgBQgNAAgHAFQgHAEAAAJQAAAIAFAFQAGAGAMAEIAMAEQATAGAJAIQAJAKAAAPQAAAMgHAJQgGAJgMAFQgMAGgQAAQgMAAgMgDg");
	this.shape_11.setTransform(70.425,59.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBAQgOgJgHgQQgHgRgBgWQAAgWAIgQQAHgQAOgJQAPgJATAAQAUAAAOAJQAPAJAHAQQAHAQAAAWQABAWgJARQgHAQgOAJQgOAJgUAAQgTAAgPgJgAgcgmQgJANAAAZQAAAZAJAOQAKAOASAAQATAAAJgOQAKgOAAgZQAAgZgKgNQgJgOgTAAQgSAAgKAOg");
	this.shape_12.setTransform(56.85,59.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5BlIAAjGIAWAAIABATQAGgLAJgFQAKgGAMAAQAQAAANAIQAMAIAIAQQAGAQABAYQAAAigRATQgRAUgiAAQgNAAgMgCIAAA6gAgihCIAABYQALADAOAAQAWAAALgPQAKgNAAgYQAAgagJgOQgLgNgRAAQgRAAgOAOg");
	this.shape_13.setTransform(42.35,62.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpA1QgRgTAAgiQAAgVAGgQQAHgQAOgKQAOgJATAAQATAAANAIQANAIAGAOQAGAOAAASIAAAKIgBAJIhbAAQACAXALAKQAMALAUAAQAWAAAUgMIgBAMIgCAKQgUAKgVAAQgiAAgRgUgAAigKQAAgUgIgLQgIgLgQAAQgPAAgJALQgKALgBAUIBDAAIAAAAg");
	this.shape_14.setTransform(27.275,59.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhIBjIAAjBQAWgEAcAAQAhAAAVANQAVANAKAWQAKAWAAAdQAAAdgLAXQgKAWgVAMQgUAMgfAAgAgvhLIAACYIAcAAQAhABARgUQAQgTAAgnQAAgkgQgUQgRgVgkABg");
	this.shape_15.setTransform(11.7,56.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBcQgNgHgHgRQgGgQAAgXQAAgiAQgUQARgTAhAAQAOAAALACIAAg2QALgDAOAAIAADEIgXAAIgCgTQgFALgKAGQgIAFgNABQgRAAgMgJgAgWgKQgLANAAAZQAAAaAJANQALAOARAAQASAAAMgOIAAhYQgKgDgOAAQgWAAgKAOg");
	this.shape_16.setTransform(343.95,24.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpA1QgRgTAAgiQAAgVAGgQQAHgQAOgKQAOgJATAAQATAAANAIQANAIAGAOQAGAOAAASIAAAKIgBAJIhbAAQACAXALAKQAMALAUAAQAWAAAUgMIgBAMIgCAKQgUAKgVAAQgiAAgRgUgAAigKQAAgUgIgLQgIgLgQAAQgPAAgJALQgKALgBAUIBDAAIAAAAg");
	this.shape_17.setTransform(329.775,26.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAiBGIgigzIgiAzIgbAAIAxhFIgwhFIAcAAIAgAzIAjgzIAaAAIgxBEIAyBGg");
	this.shape_18.setTransform(316.275,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBkIAAiKIAXAAIAACKgAgKhIQgFgEAAgHQAAgHAFgEQAFgFAFAAQAHAAAEAFQAEAEABAHQgBAHgEAEQgEAFgHAAQgFAAgFgFg");
	this.shape_19.setTransform(306.5,23.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag0BhIAAjBIBpAAQAAAKgDAMIhOAAIAAA/IBLAAIgCAVIhJAAIAABXg");
	this.shape_20.setTransform(297.1,24.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAfBjIAAhXQAAgRgHgJQgHgJgQAAQgJAAgIAFQgIAEgGAHIAABqIgYAAIAAjBQAKgEAOAAIAABQQAHgMAKgGQAKgGANAAQAXAAALAMQALANAAAVIAABfg");
	this.shape_21.setTransform(275.9,23.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWBRQgLgLAAgVIAAiJQAKgDAOAAIAAAqIArAAIgCAUIgpAAIAABLQAAAOAGAFQAEAGAMAAIAKgBIAKgEIgDAVQgLAFgMAAQgSAAgLgLg");
	this.shape_22.setTransform(264.075,24.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAfBHIAAhWQAAgSgHgIQgHgKgPABQgKAAgIAEQgIAFgHAGIAABqIgXAAIAAiKIAWAAIABAVQAIgMAKgGQAKgGAOAAQAWAAALAMQAMANAAAWIAABeg");
	this.shape_23.setTransform(251.3,26.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghBAQgPgJgHgQQgIgRAAgWQABgWAGgQQAIgQAPgJQAOgJATAAQAUAAAOAJQAPAJAHAQQAIAQAAAWQgBAWgHARQgIAQgOAJQgOAJgUAAQgTAAgOgJgAgcgmQgKANAAAZQAAAZAKAOQAJAOATAAQATAAAKgOQAJgOABgZQgBgZgJgNQgKgOgTAAQgTAAgJAOg");
	this.shape_24.setTransform(236.25,26.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABKBHIAAhWQAAgSgHgIQgHgKgQABQgRAAgQAPIACAMIAABeIgYAAIAAhWQAAgSgHgIQgHgKgPABQgKAAgJAEQgIAFgGAGIAABqIgZAAIAAiKIAXAAIACAVQAHgMAKgGQAKgGAPAAQAPAAAKAGQAKAHAEALQAJgMAKgGQAKgGAQAAQAWAAAMAMQAMANgBAWIAABeg");
	this.shape_25.setTransform(217.05,26.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag5BjIAAgIQAAgSAHgOQAIgOALgLQALgKASgOQAPgLAIgMQAIgNAAgPQAAgRgKgJQgLgJgUAAQgLAAgLACQgKADgKAFQAAgNACgKQATgJAYAAQAVAAAOAHQAPAHAHAMQAHANAAARQAAAUgLASQgLAPgWARIgVASQgIAGgGAIQgFAHgCAJIBZAAIgBALIgCAMg");
	this.shape_26.setTransform(191.125,23.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPBjIAAisIgbAGIgbAJQAAgKACgOQAQgGAVgFQAUgFAUAAIAADFg");
	this.shape_27.setTransform(174.775,23.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkBHIAAiKIAWAAIABAUQAGgLAIgGQAJgGALAAQAJAAAHACIAAALIgBAKQgJgCgJAAQgJABgIADQgHADgHAIIAABpg");
	this.shape_28.setTransform(158.35,26.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgrA6QgMgMAAgXIAAhdIAZAAIAABWQAAASAHAJQAHAIAPAAQAJAAAJgEQAIgEAHgHIAAhqIAYAAIAACKIgXAAIgBgWQgIANgKAGQgKAGgOAAQgVAAgMgNg");
	this.shape_29.setTransform(144.9,26.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiBAQgOgJgHgQQgHgRAAgWQgBgWAIgQQAHgQAOgJQAOgJAUAAQAUAAAOAJQAOAJAIAQQAHAQAAAWQABAWgJARQgHAQgOAJQgPAJgTAAQgTAAgPgJgAgcgmQgJANAAAZQAAAZAJAOQAJAOATAAQASAAAKgOQALgOgBgZQABgZgLgNQgJgOgTAAQgTAAgJAOg");
	this.shape_30.setTransform(130,26.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAfBjIAAhXQAAgRgHgJQgHgJgPAAQgKAAgIAFQgIAEgHAHIAABqIgXAAIAAjBQAJgEAOAAIAABQQAIgMAKgGQAKgGAOAAQAWAAALAMQAMANAAAVIAABfg");
	this.shape_31.setTransform(109.1,23.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWBRQgLgLAAgVIAAiJQAKgDAOAAIAAAqIArAAIgCAUIgpAAIAABLQAAAOAGAFQAEAGAMAAIAKgBIAKgEIgDAVQgLAFgMAAQgSAAgLgLg");
	this.shape_32.setTransform(97.275,24.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgLBkIAAiKIAXAAIAACKgAgKhIQgFgEABgHQgBgHAFgEQAFgFAFAAQAHAAAEAFQAFAEgBAHQABAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_33.setTransform(88.65,23.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjBGIgjhpIgiBpIgWAAIgwiKIAZAAIAjBuIAjhuIAVAAIAkBwIAhhwIAYAAIgvCKg");
	this.shape_34.setTransform(74.475,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpA1QgRgTAAgiQAAgVAGgQQAHgQAOgKQAOgJATAAQATAAANAIQANAIAGAOQAGAOAAASIAAAKIgBAJIhbAAQACAXALAKQAMALAUAAQAWAAAUgMIgBAMIgCAKQgUAKgVAAQgiAAgRgUgAAigKQAAgUgIgLQgIgLgQAAQgPAAgJALQgKALgBAUIBDAAIAAAAg");
	this.shape_35.setTransform(50.475,26.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLBGIg0iKIAaAAIAmByIAmhyIAZAAIg0CKg");
	this.shape_36.setTransform(36.9,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AggBEQgLgFgFgKQgGgJAAgNQAAgQAHgLQAIgJARgGQASgGAcgCIAGgBIAAgFQAAgPgHgGQgHgGgPAAQgOAAgLACQgLADgKAGQAAgLABgKQAUgKAcAAQAaAAAMAMQANALAAAXIAABfIgXAAIgBgTQgGALgKAGQgKAGgOAAQgNAAgKgFgAgJADQgMAEgFAGQgEAHAAAJQAAALAGAHQAHAGAMAAQAKAAAKgFQAKgEAFgIIAAgmIgFAAQgWACgMADg");
	this.shape_37.setTransform(23.025,26.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkBiQgOgDgJgFIABgMIACgKQALAGANADQANADALAAQATAAAMgIQALgJAAgPQAAgKgDgHQgEgGgIgEQgHgFgMgFIgPgHQgVgGgLgNQgMgOAAgUQAAgYAQgNQARgOAfAAQAaAAAWAJIgCALIgCAKQgLgFgLgCQgLgBgKAAQgUgBgJAJQgLAHAAAOQAAAJAEAHQAEAHAGADQAIAFALAEIAPAGQAOAFAJAGQAKAGAHAMQAGAKABAQQAAAQgJAMQgHAMgQAHQgPAHgWAAQgOAAgOgDg");
	this.shape_38.setTransform(9.25,24.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level2, new cjs.Rectangle(0,0,354.1,76.8), null);


(lib.mc_level1_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		if (!this.looped) this.looped = 0;
		if (this.looped++ == 0) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// s
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("AhACgQgZgFgTgLIACgXIAGgXQATALAXAGQAWAGAWAAQBDAAAAgrQAAgOgFgJQgGgIgLgHIgdgOIgZgKQgbgKgRgLQgTgMgKgSQgKgSAAgZQAAgpAegYQAdgWA2AAQAzgBAoAOIgHAuIgogLQgSgDgWAAQg/AAAAApQAAARANANQANAMAbAKIAaAKQAqARAUATQAUAUAAAiQAAAbgOAWQgOAVgbALQgcAMgmABQgbAAgZgHg");
	this.shape.setTransform(528.175,119.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28).to({_off:false},0).wait(332));

	// g
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC0000").s().p("AhpDWQgBgXAFgZQATAKAYAFQAXAGATAAQAtAAAYgZQAYgYAAgvIAAgpQgNAYgUAMQgVANgcAAQgmAAgdgTQgcgSgPglQgQgkAAg1QAAhRAlgsQAmgsBOAAQA9AAAxARIAAEuQAABHglAnQgkAmhKAAQgyAAgogUgAgzicQgYAgAAA6QAAA8AVAdQAWAeApAAQAoAAAcgfIAAjLQgZgHgeAAQgzAAgWAgg");
	this.shape_1.setTransform(497.7,126.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(27).to({_off:false},0).wait(333));

	// n
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgagIgRQgHgQgRgHQgRgJgbAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQBFAAAfAcQAeAeAAA2IAADUg");
	this.shape_2.setTransform(466.075,119.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(26).to({_off:false},0).wait(334));

	// i
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC0000").s().p("AgbDkIAAk9IA2AAIAAE9gAgZilQgJgKgBgQQABgQAJgKQALgKAOAAQAPAAAKAKQALAKgBAQQABAPgLAKQgKALgPAAQgOAAgLgKg");
	this.shape_3.setTransform(442.6,113.025);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(25).to({_off:false},0).wait(335));

	// v
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC0000").s().p("AgaCfIhyk9IA6AAIBTEAIBUkAIA4AAIhyE9g");
	this.shape_4.setTransform(421.75,119.925);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(24).to({_off:false},0).wait(336));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC0000").s().p("AhgB9QghgpAAhTQAAhPAlgrQAlgtBNABQAggBAaAFQAaAEAYAJIAAEzIgzAAIgDgrQgcAzg2AAQg5AAghgqgAgzhZQgWAhAAA4QAAA9AVAeQAVAeAmAAQAoAAAcgfIAAjLQgagHgcAAQgyAAgWAfg");
	this.shape_5.setTransform(390.575,119.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(23).to({_off:false},0).wait(337));

	// s
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC0000").s().p("AhACgQgZgFgTgLIACgXIAGgXQATALAXAGQAWAGAWAAQBDAAAAgrQAAgOgFgJQgGgIgLgHIgdgOIgZgKQgbgKgRgLQgTgMgKgSQgKgSAAgZQAAgpAegYQAdgWA2AAQAzgBAoAOIgHAuIgogLQgSgDgWAAQg/AAAAApQAAARANANQANAMAbAKIAaAKQAqARAUATQAUAUAAAiQAAAbgOAWQgOAVgbALQgcAMgmABQgbAAgZgHg");
	this.shape_6.setTransform(362.325,119.95);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(22).to({_off:false},0).wait(338));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC0000").s().p("AhTCiIAAkyQAUgIAdgEQAdgFAZAAQAmAAAbAGIgCAaIgEAVQgWgGglAAQgVAAgbAGIAAEOg");
	this.shape_7.setTransform(327.3,119.625);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(21).to({_off:false},0).wait(339));

	// u
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC0000").s().p("AheCFQgegdAAg2IAAjUIA3AAIAADNQAAAnASASQARASApAAQAdAAAhgIIAAkQIA4AAIAAExQhBAUg2AAQhFAAgfgeg");
	this.shape_8.setTransform(298.225,120.325);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(20).to({_off:false},0).wait(340));

	// o
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC0000").s().p("AhNCSQgggUgQgmQgRglAAgzQAAgzARgmQAQglAggUQAggTAtAAQAuAAAgATQAgAVARAkQAQAmAAAzQAAA0gQAlQgRAlggAUQghAVgtAAQgtAAgggVgAhAhZQgVAfAAA6QAAA7AVAfQAVAfArAAQArAAAWggQAWgfAAg6QAAg6gWgfQgWgfgrAAQgrAAgVAfg");
	this.shape_9.setTransform(265.675,119.95);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(19).to({_off:false},0).wait(341));

	// y
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC0000").s().p("Ah2DjQAAgdADgRIAUACQASAAAOgHQAOgHALgRQALgSAJgeIiAlOIA6AAIBeELIBVkLIA4AAIh9FmQgRAzgaAaQgbAZgqAAQgQAAgMgDg");
	this.shape_10.setTransform(234.875,127.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(18).to({_off:false},0).wait(342));

	// w
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC0000").s().p("ABOCfIhNjwIhNDwIgzAAIhrk9IA6AAIBNEAIBMkAIAyAAIBQECIBKkCIA2AAIhpE9g");
	this.shape_11.setTransform(178.9,120.525);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(17).to({_off:false},0).wait(343));

	// o
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AhNCSQgggUgQglQgRgmAAgzQAAgzARgmQAQglAggUQAggTAtgBQAuAAAgAVQAgAUARAkQAQAmAAAzQAAA0gQAlQgRAlggAUQghAUgtAAQgtAAgggUgAhAhZQgVAfAAA6QAAA7AVAfQAVAfArgBQArAAAWgeQAWggAAg6QAAg5gWggQgWgfgrAAQgrAAgVAfg");
	this.shape_12.setTransform(139.175,120.55);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(16).to({_off:false},0).wait(344));

	// r
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AhUCiIAAkyQAWgIAdgEQAcgFAZAAQAmAAAaAGIAAAaIgFAVQgWgGgkAAQgXAAgbAGIAAEOg");
	this.shape_13.setTransform(113.5,120.225);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(15).to({_off:false},0).wait(345));

	// g
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AhpDWQgBgXAFgZQATAKAYAFQAXAGATAAQAtAAAYgZQAYgYAAgvIAAgpQgNAYgUAMQgVANgcAAQgnAAgcgTQgcgSgQglQgPgkAAg1QAAhRAlgsQAlgsBPAAQA9AAAxARIAAEuQAABHgkAnQglAmhKAAQgyAAgogUgAgzicQgYAgAAA6QAAA8AVAdQAWAeApAAQAoAAAcgfIAAjLQgZgHgdAAQg0AAgWAgg");
	this.shape_14.setTransform(83.6,127.325);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).wait(346));

	// o
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AhNCSQgggUgQglQgRgmAAgzQAAgzARgmQAQglAggUQAggTAtgBQAuAAAgAVQAgAUARAkQAQAmAAAzQAAA0gQAlQgRAlggAUQghAUgtAAQgtAAgggUgAhAhZQgVAfAAA6QAAA7AVAfQAVAfArgBQArAAAWgeQAWggAAg6QAAg5gWggQgWgfgrAAQgrAAgVAfg");
	this.shape_15.setTransform(39.425,120.55);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(13).to({_off:false},0).wait(347));

	// t
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AgzC7QgYgZAAgyIAAk5QAXgJAgABIAABfIBgAAIgFAuIhbAAIAACvQAAAdAMAOQALANAZAAIAYgCIAXgJIgEAdIgCASQgXAMgegBQgqABgZgYg");
	this.shape_16.setTransform(13.65,116.15);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(12).to({_off:false},0).wait(348));

	// d
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AhHDTQgdgSgPglQgQglAAg1QAAhQAlgsQAmgtBOABQAeAAAZADIAAh5QAXgJAgABIAAHCIgzAAIgEgsQgNAZgTANQgVANgdABQgmAAgcgTgAgzgaQgYAgAAA6QAAA7AWAeQAVAfApAAQAoAAAcgfIAAjLQgZgHgeAAQgzAAgWAfg");
	this.shape_17.setTransform(292.35,52.45);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(9).to({_off:false},0).wait(351));

	// e
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AhdB6QgogsAAhQQAAgvAPglQAQglAfgVQAfgWAtABQBAgBAhAmQAgAnAABCIgBAWIgCASIjOAAQAEA3AZAZQAaAYAwAAQAzAAAsgaIgDAaIgGAXQgkAXg5AAQhLAAgngtgABNgbQAAgsgRgYQgSgZgmAAQgjAAgTAYQgVAZgEAsICYAAIAAAAg");
	this.shape_18.setTransform(260.9,58.75);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(8).to({_off:false},0).wait(352));

	// e
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AhdB6QgogsAAhQQAAgvAPglQAPglAggVQAfgWAtABQBAgBAhAmQAgAnAABCIgBAWIgCASIjPAAQAFA3AZAZQAaAYAwAAQAzAAAsgaIgDAaIgGAXQgkAXg5AAQhLAAgngtgABNgbQAAgsgSgYQgRgZgmAAQgjAAgTAYQgVAZgEAsICYAAIAAAAg");
	this.shape_19.setTransform(229.5,58.75);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(7).to({_off:false},0).wait(353));

	// t
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AgzC6QgYgYAAgyIAAk5QAXgIAggBIAABgIBgAAIgFAvIhbAAIAACtQAAAeAMAOQALAOAZAAIAYgEIAXgJIgEAfIgDARQgWAMgeAAQgrAAgYgZg");
	this.shape_20.setTransform(204.65,54.35);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(6).to({_off:false},0).wait(354));

	// n
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgagIgRQgHgQgRgHQgRgJgbAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQBFAAAfAdQAeAdAAA2IAADUg");
	this.shape_21.setTransform(177.025,58.35);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(5).to({_off:false},0).wait(355));

	// a
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AhgB9QghgpAAhTQAAhPAlgrQAlgtBNABQAggBAaAFQAaAEAYAJIAAEzIgzAAIgDgrQgcAzg2AAQg5AAghgqgAgzhZQgWAhAAA4QAAA9AVAeQAVAeAmAAQAoAAAcgfIAAjLQgagHgcAAQgyAAgWAfg");
	this.shape_22.setTransform(143.325,58.75);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(4).to({_off:false},0).wait(356));

	// r
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AhUCiIAAkyQAWgIAcgEQAdgFAZAAQAlAAAbAGIgBAaIgEAVQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_23.setTransform(118.65,58.425);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(3).to({_off:false},0).wait(357));

	// a
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC0000").s().p("AhgB9QghgpAAhTQAAhPAlgrQAlgtBNABQAggBAaAFQAaAEAYAJIAAEzIgzAAIgDgrQgcAzg2AAQg5AAghgqgAgzhZQgWAhAAA4QAAA9AVAeQAVAeAmAAQAoAAAcgfIAAjLQgagHgcAAQgyAAgWAfg");
	this.shape_24.setTransform(88.975,58.75);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(2).to({_off:false},0).wait(358));

	// u
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC0000").s().p("AheCFQgegdAAg2IAAjUIA3AAIAADNQAAAnASASQARASApAAQAdAAAhgIIAAkQIA4AAIAAExQhBAUg2AAQhFAAgfgeg");
	this.shape_25.setTransform(57.175,59.125);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(359));

	// G
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC0000").s().p("AhHDLQgugdgXg1QgXg0AAhGQAAhIAZg0QAYgzAwgbQAvgbBDAAQAhAAAdAFQAdAFAWAKQgBAUgIAdQgxgTg3AAQgwAAgiAUQgjAVgSAoQgRAoAAA6QAAA5AQApQASApAhAVQAhAVAuAAQAiABAfgIIAAixIA5AAIAADTQgZAMghAFQgiAHggAAQhCAAgtgcg");
	this.shape_26.setTransform(20.675,52.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,543.4,158.2);


(lib.mc_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().dr(-150,-300,300,600);
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_background, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_286 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(286).call(this.frame_286).wait(13));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EC0000").ss(2,1,1).p("A3SzWMAulAAAMAAAAmtMgulAAAg");
	this.shape.setTransform(150.0614,125.0605,1.0002,1.0016);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(299));

	// logo_pos
	this.instance = new lib.SantanderInternationalpos();
	this.instance.parent = this;
	this.instance.setTransform(252.35,71.05,0.3956,0.3956,0,0,0,408.7,123.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299));

	// primary_cta
	this.instance_1 = new lib.primary_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,220.2,0.7086,0.7086,0,0,0,72.2,17.2);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.primary_cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},30).wait(269));

	// header
	this.instance_2 = new lib.mc_level1_final();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.6,98.85,0.4107,0.4104,0,0,0,86.3,77.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(255));

	// subheader
	this.instance_3 = new lib.mc_level2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.95,153.95,0.5542,0.5542,0,0,0,68.2,42.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({regY:43,scaleY:0.5543,y:154.05,alpha:1},30).wait(139));

	// T_C
	this.instance_4 = new lib.mc_level3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.6,197.55,0.5306,0.5307,0,0,0,68.7,43.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).to({alpha:1},30).wait(109));

	// background_colour
	this.instance_5 = new lib.mc_background();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,0.4167,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:299.9,y:-124.95},29,cjs.Ease.quartInOut).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-124.9,150.2,375.1);
// library properties:
lib.properties = {
	id: '05920BE2A36F420086AAC3866015E257',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['05920BE2A36F420086AAC3866015E257'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;